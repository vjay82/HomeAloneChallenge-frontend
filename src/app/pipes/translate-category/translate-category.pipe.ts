import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateCategory'
})
export class TranslateCategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'art' :
        return 'Kunst';
      case 'eco' :
        return 'Umwelt';
      case 'fun' :
        return 'Unterhaltung';
      case 'group':
        return 'Gesellschaft';
      case 'household':
        return 'Haushalt';
      case 'selfcare':
        return 'Mental';
      case 'social':
        return 'Sozial';
      case 'sport':
        return 'Sport';
      case 'other':
        return 'Andere';
      default:
        return '!FEHLER!';
    }
  }
}
