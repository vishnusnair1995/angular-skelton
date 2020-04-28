import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatcurrency'
})
export class FormatcurrencyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
