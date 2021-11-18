import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modText'
})
export class CreateInputPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `<i>${value}<i> (pipe)`
  }

}
