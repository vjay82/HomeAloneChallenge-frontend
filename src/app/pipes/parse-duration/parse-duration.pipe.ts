import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDuration'
})
export class ParseDurationPipe implements PipeTransform {

  transform(value: number): string {
    return value + ' Sek';
  }

}
