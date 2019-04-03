import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
// Adds a * for every multiple of 5 of counter value
export class StarPipe implements PipeTransform {

  transform(counter: any, args?: any): any {
    if (counter > 0) {
      return counter + ' ' + '*'.repeat(counter / 5);
    } else {
      return counter;
    }
  }

}
