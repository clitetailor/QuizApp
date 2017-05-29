import { Injectable } from '@angular/core'
import { MeteorObservable } from 'meteor-rxjs'

@Injectable()
export class QuizService {
	constructor() { }

	getTopics() {
		Meteor.subscribe('topics');
	}

	getQuizPackets(topic) {
		Meteor.subscribe('all-quiz-packets', null, topic);
	}

	getOwnerPackets(topic?) {
		Meteor.subscribe('owner-packets', null, topic)
	}

	getPacket(packetId) {
		
	}
}
