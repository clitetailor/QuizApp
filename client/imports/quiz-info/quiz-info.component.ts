import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import template from './quiz-info.component.html'
import { textContent } from './quiz-info.component.styl'
import { QuizPackets } from '../../../both/collections/quizzes.collection'
import { QuizPacket } from '../../../both/models/quiz.model'
import { Subscription, Observable } from 'rxjs'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'
import unsubscribe from '../unsubscribe'
import { UserResults } from '../../../both/collections/user-results.collection'; 
import { InjectUser } from 'angular2-meteor-accounts-ui';
import { User } from '../../../both/models/user.model';
import { Users } from '../../../both/collections/users.collection';
import { UserResult } from '../../../both/models/user-result.model';
@Component({
	selector: 'app-quiz-info',
	template: template,
	styles: [textContent]
})
@InjectUser('user')
export class QuizInfoComponent implements OnInit, OnDestroy {

	constructor(private route: ActivatedRoute, private router: Router) { }
	
	subscriptions = []
	resultSub : Subscription;
	results: Observable<UserResult[]>;
	userSub: Subscription;
	users: Observable<User[]>;
	ngOnInit() {
		this.subscriptions.push(this.route.params.map(params => params['id']).subscribe(_id => {
			this.subscriptions.push(QuizPackets.find({}).zone().subscribe(packets => {
				this.quiz = packets.find(packet => packet._id === _id)
			}))

			this.subscriptions.push(MeteorObservable.subscribe('quiz-packet', _id).subscribe())
		}));
		this.resultSub = MeteorObservable.subscribe('results').subscribe(()=> {
			console.log('results');
			MeteorObservable.autorun().subscribe(()=>{
				this.results = UserResults.find({quizId: this.quiz._id});
				console.log('tim');
				console.log(this.results);
			})
		});
		this.userSub = MeteorObservable.subscribe('users').zone().subscribe(()=>{
			MeteorObservable.autorun().zone().subscribe(()=>{
				this.users = Users.find({});
			})
		});
		
	
	}

	getUsername(userId: string){
		let user: Meteor.User;
		if(userId){
			user = Users.findOne({_id: userId});
			if(user)
				return user.username;
			else	
				return null;
		}
		
	}
	ngOnDestroy() {
		this.subscriptions.forEach(unsubscribe);
		this.resultSub.unsubscribe();
		this.userSub.unsubscribe();
	}

	quiz: QuizPacket;
	checkDone(user){
		return UserResults.findOne({userId: user._id, quizId: this.quiz._id})
	}
	start() {
		console.log('start');
		if (Meteor.user()){
			if (this.checkDone(Meteor.user())){
				window.alert('Ban da tra loi goi cau hoi nay. Hay tim goi cau hoi khac de tra loi');
			}
			else{
				this.route.params.map(params => params['id'])
				.subscribe(_id => {
					this.router.navigate([`quiz/${_id}`])
				})
			}
		}
		else {
			this.route.params.map(params => params['id'])
			.subscribe(_id => {
				this.router.navigate([`quiz/${_id}`])
			})
		}
		
	}
	logout(){
		Meteor.logout();
		this.router.navigate(['/']);
	}
}
