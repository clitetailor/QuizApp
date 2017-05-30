import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import template from './quiz-page.component.html'
import { textContent } from './quiz-page.component.styl'
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'

@Component({
	selector: 'app-quiz-page',
	template: template,
	styles: [textContent]
})
export class QuizPageComponent implements OnInit {

	constructor(
		private ngZone: NgZone,
		private route: ActivatedRoute,
		private router: Router,
		private quizService: QuizService) { }

	quizSub;
	quiz;

	ngOnInit() {
		this.route.params.map(params => params['id'])
			.subscribe(_id => {
				this.quiz = QuizPackets.findOne({ _id });
				this.quiz.questions = this.quiz.questions.map(question => {
					question.answers = question.answers.map(answer => {
						return Object.assign({}, answer, {
							checked: false
						})
					})

					return question;
				});
				this.timming = this.quiz.duration * 60;
			})

		this.quizSub = MeteorObservable.subscribe('all-quiz-packets').subscribe();

		setInterval(() => {
			this.ngZone.run(() => {
				this.timming = this.timming - 1
			})
		}, 1000);
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
		this.quiz.questions[questionId].answers[answerId].checked = !this.questions[questionId].answers[answerId].checked;
	}

	submit() {
		this.quizService.setResult(this.quiz)

		this.router.navigate(['result'])
	}
}
