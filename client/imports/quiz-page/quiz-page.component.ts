import { Component, OnInit, NgZone } from '@angular/core';
import template from './quiz-page.component.html'
import { textContent } from './quiz-page.component.styl'

@Component({
  selector: 'app-quiz-page',
  template: template,
  styles: [textContent]
})
export class QuizPageComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
    setInterval(() => {
      this.ngZone.run(() => {
        this.timming = this.timming - 1
      })
    }, 1000);
  }

  timming = 3601;

  get timmingHours() {
    return Math.floor(this.timming / 3600);
  }

  get timmingMinutes() {
    return Math.floor(this.timming % 3600 / 60);
  }

  get timmingSeconds() {
    return this.timming % 60;
  }

  questions = [{
      content: "",
      answers: Array.from({ length: 4 }, (v, k) => {
        return {
          content: "",
          checked: false
        }
      })
  }, {
      content: "",
      answers: Array.from({ length: 4 }, (v, k) => {
        return {
          content: "",
          checked: false
        }
      })
  }]

  chooseAnswer(questionId, answerId) {
    this.questions[questionId].answers[answerId].checked = !this.questions[questionId].answers[answerId].checked;
  }
}
