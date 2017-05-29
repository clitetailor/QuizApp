import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import template from './quiz-info.component.html'
import { textContent } from './quiz-info.component.styl'
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'

@Component({
	selector: 'app-quiz-info',
	template: template,
	styles: [textContent]
})
export class QuizInfoComponent implements OnInit, OnDestroy {

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.route.params.map(params => params['id'])
			.subscribe(_id => {
				this.quiz = QuizPackets.findOne({ _id })
			})

		this.quizSub = MeteorObservable.subscribe('all-quiz-packets').subscribe();
	}

	ngOnDestroy() {
		this.quizSub.unsubscribe();
	}

	quiz = {};
	quizSub;

	users = [{
		username: "Clite Tailor",
		points: 80
	}, {
		username: "Anna",
		points: 70
	}]

	start() {
		this.route.params.map(params => params['id'])
			.subscribe(_id => {
				this.router.navigate([`quiz/${_id}`])
			})
	}
}