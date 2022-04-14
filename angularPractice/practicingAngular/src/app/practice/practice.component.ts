import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  public name = "Davine";
  public myId = "practiceId";
  public isDisabled = "true";
  public colorText = "text-success";
  public hasError = true;
  public isSpecial = true;
  public highlightColor= "orange";
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special": this.isSpecial
  }
  public titleStyles = {
    color: "plum",
    fontStyle: "italic"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
