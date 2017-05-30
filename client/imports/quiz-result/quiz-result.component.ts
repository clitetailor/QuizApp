import { Component, OnInit } from '@angular/core';
import template from './quiz-result.component.html';
import { textContent } from './quiz-result.component.styl'

@Component({
  selector: 'app-quiz-result',
  template: template,
  styles: [textContent]
})
export class QuizResultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
	
  }
}
