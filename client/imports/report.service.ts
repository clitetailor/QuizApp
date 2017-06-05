import { Injectable } from '@angular/core'
import { MeteorObservable } from 'meteor-rxjs'

@Injectable()
export class ReportService {
	constructor() { }
	quizId: string;
	content: string;
	
	setQuizId(quizId) {
		this.quizId = quizId;		
	}
	setContent(content){
		this.content = content;
	}
	getQuizId(){
		return this.quizId;
	}
	getContent() {
		return this.content;
	}
	
}
