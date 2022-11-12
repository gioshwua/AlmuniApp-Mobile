import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'navBar'
})
export class NavBarPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
