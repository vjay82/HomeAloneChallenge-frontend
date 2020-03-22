import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import {Category} from "../classes/category";
import {ApiService} from "../api-service/api.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-create-challenge-page',
  templateUrl: './create-challenge-page.component.html',
  styleUrls: ['./create-challenge-page.component.scss']
})
export class CreateChallengePageComponent implements OnInit {
  categories: string[] = Object.keys(Category);

  category: string;
  title: string;
  duration: number;
  description: string;

  invalid: boolean = false;

  constructor(
    public location: Location,
    private router: Router,
    private api: ApiService,
    private modal: NgbModal,
  ) {
  }

  ngOnInit(): void {
  }

  onClickCreateChallenge(dialogcontent) {
    console.log("Creating challenge!");
    console.log(this.category);
    console.log(this.title);
    console.log(this.description);
    console.log(this.duration);

    if (this.category && this.title && this.description && this.duration) {
      this.api.createNewChallenge({
        title: this.title,
        description: this.description,
        category: this.category,
        duration: this.duration,
      }).then(value => {
        this.modal.open(dialogcontent, {backdrop: false, centered: true, keyboard: false})
      }).catch(reason => {
        alert(reason);
      });


    } else {
      this.invalid = true;
    }
  }

  close(modal) {
    modal.close();
    this.router.navigateByUrl("/main");
  }
}
