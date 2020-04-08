import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseDuration'
})
export class ParseDurationPipe implements PipeTransform {

  transform(value: number): string {
    if (value == null) return "";
    if (value < 60) {
      return value + ' sek';
    } else {
      value /= 60;
      if (value < 60) {
        return value + ' min';
      } else {
        value /= 60;
        if (value < 60) {
          return value + ' h';
        } else {
          return 'tooooooo long';
        }
      }
    }
  }

}
