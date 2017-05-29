import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(time: any[]): any {
	  return `${this.timmingHours(time)}:${this.timmingMinutes(time)}:${this.timmingSeconds(time)}`
  }

  timmingHours(time) {
    return Math.floor(time / 3600);
  }

  timmingMinutes(time) {
    return Math.floor(time % 3600 / 60);
  }

  timmingSeconds(time) {
    return time % 60;
  }

}
