import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ // defines name of the pipe
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    var dateDifference = Math.abs(value - todayWithNoTime);
    const secondaInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondaInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    } else {
      return 0;
    }
  }

}
