import { CollectionObject } from './collection-object.model'

export interface UserResult extends CollectionObject {
	userId: string,
	quizId: string,
	points: number
}