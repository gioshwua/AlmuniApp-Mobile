import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'news'
})
export class NewsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
