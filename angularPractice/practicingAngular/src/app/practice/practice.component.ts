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
  constructor() { }

  ngOnInit(): void {
  }

}
