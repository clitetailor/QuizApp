import { Injectable } from '@angular/core'
import { MeteorObservable } from 'meteor-rxjs'

@Injectable()
export class QuizService {
	constructor() { }
	quizId: string;
	userId: string;
	result = 0;
	numberOfQuestions = 0;

	setResult(result, num) {
		this.result = result;
		this.numberOfQuestions = num;
		
	}
	setUser(id){
		this.userId = id;
	}
	setQuiz(id){
		this.quizId = id;
	}
	getUser(){
		return this.userId;
	}
	getResult() {
		return this.result;
	}
	getQuiz(){
		return this.quizId;
	}

	getNumberOfQuestions() {
		return this.numberOfQuestions;
	}
}
