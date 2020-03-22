import { Pipe, PipeTransform } from "@angular/core";
import { Category } from "../../classes/category";

@Pipe({
  name: "translateCategory"
})
export class TranslateCategoryPipe implements PipeTransform {
  transform(value: string): string {
    console.log("string:", Category.art);
    switch (value) {
      case Category.art:
        return "Kunst";
      case Category.eco:
        return "Umwelt";
      case Category.fun:
        return "Unterhaltung";
      case Category.group:
        return "Gesellschaft";
      case Category.household:
        return "Haushalt";
      case Category.selfcare:
        return "Mental";
      case Category.social:
        return "Sozial";
      case Category.sport:
        return "Sport";
      case Category.other:
        return "Andere";
      default:
        return "!FEHLER!";
    }
  }
}
