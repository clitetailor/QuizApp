import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicPipe'
})
export class TopicPipe implements PipeTransform {

  transform(quizPackets: any[], topic: string): any {
	console.log(quizPackets, topic)
	if (topic === '' || topic === null || topic === undefined) {
		return quizPackets;
	}

	return quizPackets.filter(packet => packet.topic === topic)
  }
}
