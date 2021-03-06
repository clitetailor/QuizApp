import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import template from './quiz-result.component.html';
import { textContent } from './quiz-result.component.styl'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'
import { UserResults } from '../../../both/collections/user-results.collection'
import { InjectUser } from 'angular2-meteor-accounts-ui';

@Component({
  selector: 'app-quiz-result',
  template: template,
  styles: [textContent]
})
@InjectUser('user')
export class QuizResultComponent implements OnInit {
	user: Meteor.User;
  constructor(
		private quizService: QuizService,
		private router: Router
	) { }

	subscription = [];
	result = 0;
	userId: string;
	quiz: any;

  ngOnInit() {
		this.result = this.quizService.getResult();
		this.quiz = this.quizService.getQuiz();
		this.userId = this.quizService.getUser();
  }

	shareResult() {
		if (!Meteor.user()){
			if(window.confirm('Bạn phải đăng nhập để share kết quả')){
				this.router.navigate(['/signup']);
			}
		}else{
			this.subscription.push(MeteorObservable.call('share-result', this.quiz).subscribe());
			window.alert('Share kết quả '+ this.quizService.getUser()+ " "+ this.quizService.getQuiz()+ " "+ this.result);
		}
				
	}

	back() {
		this.router.navigate(['/'])
	}
}
