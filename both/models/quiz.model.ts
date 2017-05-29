import { CollectionObject } from './collection-object.model';

export interface QuizPacket extends CollectionObject{
    questions: Question[],
    topic: string,
    time: Date,
    duration: number,
    numberOfViews: number,
    numberOfVotes: number,
    title: string
    author?: string
}

interface Question extends CollectionObject{
    content: string,
    answers: Answer[],
	numberOfRespondents: number
}

interface Answer extends CollectionObject{
    content: string,
	correct: boolean,
    numberOfClicks: number
}
