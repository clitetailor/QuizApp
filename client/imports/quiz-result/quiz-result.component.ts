import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import template from './quiz-result.component.html';
import { textContent } from './quiz-result.component.styl'
import { MeteorObservable } from 'meteor-rxjs'
import { QuizService } from '../quiz.service'

@Component({
  selector: 'app-quiz-result',
  template: template,
  styles: [textContent]
})
export class QuizResultComponent implements OnInit {

  constructor(
		private quizService: QuizService,
		private router: Router
	) { }

	subscription = [];
	result = 0;

  ngOnInit() {
		this.result = this.quizService.getResult();
  }

	shareResult() {
		
	}

	back() {
		this.router.navigate(['/'])
	}
}
