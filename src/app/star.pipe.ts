import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'star'
})
export class StarPipe implements PipeTransform {

  transform(counter: any, args?: any): any {
    if (counter > 0) {
      return counter + '*'.repeat(counter / 5);
    } else {
      return counter;
    }
  }

}
