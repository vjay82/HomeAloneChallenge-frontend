import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api-service/api.service";

@Component({
  selector: "app-main-page",
  templateUrl: "./main-page.component.html",
  styleUrls: ["./main-page.component.scss"]
})
export class MainPageComponent implements OnInit {
  constructor(private api: ApiService) {}

  ngOnInit(): void {
<<<<<<< HEAD
    this.api.getDailyTip().then(data => {
      // Do futher requests
      console.log(data);
      
    }).catch(err => {
      console.error(err)
    })

=======
    this.api.getDailyTip().subscribe(data => {
      console.log("tip:" + data);
    });
>>>>>>> 0f1cd81088c214e65bba13cb30c6e9c7f2dc4c70
  }
}
