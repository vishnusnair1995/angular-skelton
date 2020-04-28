import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'revrseStrig'
})
export class RevrseStrigPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
