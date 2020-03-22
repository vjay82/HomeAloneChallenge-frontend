import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-revard-tree-page',
  templateUrl: './revard-tree-page.component.html',
  styleUrls: ['./revard-tree-page.component.scss']
})
export class RevardTreePageComponent implements OnInit {

  constructor(public location: Location) { }

  ngOnInit(): void {
  }

}
