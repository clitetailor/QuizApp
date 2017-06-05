import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import template from './user-quiz-done.component.html'
import { textContent } from './user-quiz-done.component.styl'
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'
import unsubscribe from '../unsubscribe'
import { UserResults } from '../../../both/collections/user-results.collection'; 
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { UserResult } from '../../../both/models/user-result.model';
@Component({
	selector: 'app-user-quiz',
	template: template,
	styles: [textContent]
})
@InjectUser('user')
export class UserQuizDoneComponent implements OnInit, OnDestroy {

	constructor(private route: ActivatedRoute, private router: Router) { }
	user: Meteor.User;
	subscriptions = []
	resultSub : Subscription;
	quizSub: Subscription;
	quizzes: Observable<QuizPacket[]>;
	results: Observable<UserResult[]>;
	ngOnInit() {
		this.resultSub = MeteorObservable.subscribe('my-results').subscribe(()=> {
			console.log('myresult');
			MeteorObservable.autorun().subscribe(()=>{
				this.results = UserResults.find({});
				console.log('tim');
				console.log(this.results);
			})
		})
		this.quizSub= MeteorObservable.subscribe('quiz-packets').subscribe(()=>{
			console.log('quiz');
			MeteorObservable.autorun().subscribe(()=>{
				this.quizzes = QuizPackets.find({});
			})
		})

	}
	ngOnDestroy() {
		this.resultSub.unsubscribe();
	}

	quiz: QuizPacket;

	getQuizTitle(quizId){
		let quiz: QuizPacket;
		if (quizId){
			quiz = QuizPackets.findOne({_id: quizId});
			if (quiz){
				console.log(quiz.title);
				return quiz.title;
			}
			else{ 
				console.log('null');
				return null;
			}
		}
	}
	
	logout(){
		Meteor.logout();
		this.router.navigate(['/']);
	}
	gotoHome(){
		this.router.navigate(['/']);
	}
}
