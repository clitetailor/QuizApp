import { CollectionObject } from './collection-object.model'

export interface Report extends CollectionObject {
	quizId: string,
	content: string,
	createdAt: Date,
}