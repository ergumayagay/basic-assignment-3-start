import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details: string = 'This is a detail';
  isDisplayed:boolean = false;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  onDisplay(){
    this.isDisplayed = !this.isDisplayed;
    this.logs.push(new Date());
  }
}
