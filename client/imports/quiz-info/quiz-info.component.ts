import { Component, OnInit } from '@angular/core';
import template from './quiz-info.component.html'
import { textContent } from './quiz-info.component.styl'

@Component({
  selector: 'app-quiz-info',
  template: template,
  styles: [textContent]
})
export class QuizInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  quiz = {

  }

  users = [{
    username: "Clite Tailor",
    points: 80
  }, {
    username: "Anna",
    points: 70
  }]

  start() {

  }
}
