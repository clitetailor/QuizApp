import { MongoObservable } from 'meteor-rxjs'
import { PublicQuizPacket } from '../models/public-quiz.model'

import { QuizPackets } from './quizzes.collection'
import loggedIn from './logged-in'

export const PublicQuizPackets = new MongoObservable.Collection<PublicQuizPacket>(QuizPackets.collection, {
	transform: function(packet) {
		const newPacket = Object.assign({}, packet, {
			questions: packet.questions.map(question => {
				question.anwers = question.answers.map(answer => {
					return Object.assign({}, answer, {
						correct: undefined
					})
				})
			})
		})

		return newPacket;
	}
})