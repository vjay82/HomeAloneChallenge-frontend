import { Pipe, PipeTransform } from "@angular/core";
import { Category } from "../../classes/category";

@Pipe({
  name: "translateCategory"
})
export class TranslateCategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case Category.art:
        return "Kreativität";
      case Category.eco:
        return "Nachhaltigkeit";
      case Category.fun:
        return "Spaß";
      case Category.education:
        return "Bildung";
      case Category.household:
        return "Haushalt";
      case Category.selfcare:
        return "Mentale Gesundheit";
      case Category.social:
        return "Miteinander";
      case Category.physical:
        return "Bewegung";
      default:
        return "!FEHLER!";
    }
  }
}
