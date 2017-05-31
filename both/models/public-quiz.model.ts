import { CollectionObject } from './collection-object.model'

export interface PublicQuizPacket extends CollectionObject {
	questions: Question[],
	topic: string,
	time: Date,
	duration: number,
	numberOfViews: number,
	numberOfVotes: number,
	title: string,
	checked?: boolean,
	author?: string
}

interface Question extends CollectionObject {
	content: string,
	answers: PublicAnswer[],
	numberOfRespondents: number
}

interface PublicAnswer extends CollectionObject {
	content: string,
	numberOfClicks: number
}
