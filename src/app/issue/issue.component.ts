import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-issue',
  templateUrl: './issue.component.html',
  styleUrls: ['./issue.component.css','../button.css']
})

export class IssueComponent implements OnInit {

  constructor() {
  }
  ngOnInit(): void {
    console.log(this);
  }
}
