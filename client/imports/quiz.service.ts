import { Injectable } from '@angular/core'
import { MeteorObservable } from 'meteor-rxjs'

@Injectable()
export class QuizService {
	constructor() { }

	result = 0;
	numberOfQuestions = 0;

	setResult(result, num) {
		this.result = result;
		this.numberOfQuestions = num;
	}

	getResult() {
		return this.result;
	}

	getNumberOfQuestions() {
		return this.numberOfQuestions;
	}
}
