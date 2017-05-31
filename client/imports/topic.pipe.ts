import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'topicPipe'
})
export class TopicPipe implements PipeTransform {

	transform(packets: any[], topic: string): any {
		if (topic === null || topic === '' || topic === undefined) {
			return packets;
		}

		return packets.filter(packet => packet.topic.toLowerCase().indexOf(topic.toLowerCase()) !== -1);
	}
}
