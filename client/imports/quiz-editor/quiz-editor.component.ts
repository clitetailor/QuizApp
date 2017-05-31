import { Component, OnInit } from '@angular/core';
import template from './quiz-editor.component.html'
import { textContent } from './quiz-editor.component.styl'

@Component({
  selector: 'app-quiz-editor',
  template: template,
  styles: [textContent]
})
export class QuizEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  curQuestion = this.newQuestion();
  questions = [this.curQuestion]

  newQuestion() {
    return {
      content: "",
      answers: Array.from({ length: 4 }, (v, k) => {
        return {
          content: "",
          correct: k === 0 ? true : false
        }
      })
    }
  }

  addQuestion() {
    this.curQuestion = this.newQuestion();
    this.questions.push(this.curQuestion);
  }

  removeQuestion(index) {
    if (this.curQuestion === this.questions[index] && index === 0 && this.questions.length === 1) {
      this.curQuestion = this.newQuestion();
      this.questions = [this.curQuestion];
      return;
    }

    if (this.curQuestion === this.questions[index] && index === 0) {
      this.questions.splice(0, 1);
      this.curQuestion = this.questions[0];
      return;
    }

    if (this.curQuestion === this.questions[index]) {
      this.questions.splice(index, 1);
      this.curQuestion = this.questions[index - 1];
      return;
    }

    this.questions.splice(index, 1);
  }

  chooseQuestion(index) {
    this.curQuestion = this.questions[index];
  }

  addAnswer() {
    this.curQuestion.answers.push({
      content: "",
      correct: false
    })
  }

  toggleAnswer(i) {
    this.curQuestion.answers[i].correct = !this.curQuestion.answers[i].correct;
  }

  removeAnswer(i) {
    this.curQuestion.answers.splice(i, 1);
  }

  done() {
	  
  }
}
