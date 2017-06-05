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
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { ReportService } from '../report.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
	selector: 'app-quiz-page',
	template: template,
	styles: [textContent]
})
@InjectUser('user')
export class QuizPageComponent implements OnInit, OnDestroy {

	constructor(
		private ngZone: NgZone,
		private route: ActivatedRoute,
		private router: Router,
		private quizService: QuizService,
		private reportService: ReportService,
		private formBuilder: FormBuilder) { }

	quiz: any = {};
	subscriptions = [];
	reportForm: FormGroup;
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
		this.reportForm = this.formBuilder.group({
			content: ['', Validators.required]
			
		})
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
			this.quizService.setUser(Meteor.userId());
			this.quizService.setQuiz(this.quiz);
			this.router.navigate(['/result']);
		}));
	}
	logout(){
		Meteor.logout();
		this.router.navigate(['/']);
	}
	details: string;
	
	report(){
		this.details = 'Sending Report...';
		this.reportService.setQuizId(this.quiz._id);
		this.subscriptions.push(MeteorObservable.call('report-packet', this.quiz._id, this.reportForm.value.content).subscribe(report=>{
			this.details= "Report Sent";
		}));
	}
}
