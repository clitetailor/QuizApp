import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(packets, search): any {
		if (search === '' || search === null || search === undefined) {
			return packets;
		}

		return packets.filter(packet => packet.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }
}
