import { Injectable } from '@angular/core'
import { MeteorObservable } from 'meteor-rxjs'

@Injectable()
export class QuizService {
	constructor() { }

	quiz;
	result = 0;

	setResult(quiz) {
		this.quiz = quiz;

		this.result = 0;

		for (let question of this.quiz.questions) {
			let correct = question.answers.reduce((pre, cur) => {
				return pre && (cur.correct === cur.checked)
			}, true);

			if (correct) {
				this.result++;
			}
		}
	}
}
