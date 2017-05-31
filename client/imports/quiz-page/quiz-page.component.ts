import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import template from './quiz-page.component.html'
import { textContent } from './quiz-page.component.styl'
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'
import unsubscribe from '../unsubscribe'

@Component({
	selector: 'app-quiz-page',
	template: template,
	styles: [textContent]
})
export class QuizPageComponent implements OnInit, OnDestroy {

	constructor(
		private ngZone: NgZone,
		private route: ActivatedRoute,
		private router: Router,
		private quizService: QuizService) { }

	quiz: any = {};
	subscriptions = [];

	ngOnInit() {
		this.subscriptions.push(this.route.params.map(params => params['id'])
			.subscribe(_id => {
				this.subscriptions.push(this.route.params.map(params => params['id']).subscribe(_id => {

					this.subscriptions.push(QuizPackets.find({}).zone().subscribe(packets => {
						this.quiz = packets.find(packet => packet._id === _id)

						if (this.quiz) {
							this.timming = this.quiz.duration * 60;
						}
					}))

					this.subscriptions.push(MeteorObservable.subscribe('quiz-packet', _id).subscribe())
				}))
			}))

		const interval = setInterval(() => {
			this.ngZone.run(() => {
				if (this.timming < 0) {
					this.submit();
					clearInterval(interval);
				}

				this.timming = this.timming - 1
			})
		}, 1000);
	}

	ngOnDestroy() {
		this.subscriptions.forEach(unsubscribe);
	}

	timming = 0;

	get timmingHours() {
		return Math.floor(this.timming / 3600);
	}

	get timmingMinutes() {
		return Math.floor(this.timming % 3600 / 60);
	}

	get timmingSeconds() {
		return this.timming % 60;
	}

	chooseAnswer(questionId, answerId) {
		this.quiz.questions[questionId].answers[answerId].checked = !this.quiz.questions[questionId].answers[answerId].checked;
	}

	submit() {
		this.subscriptions.push(MeteorObservable.call('submit-result', this.quiz).subscribe(result => {
			this.quizService.setResult(result, this.quiz.questions.length);

			this.router.navigate(['/result'])
		}))
	}
}
