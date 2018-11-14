import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiples',
  template: '<app-server></app-server><app-server></app-server>',
  styleUrls: ['./multiples.component.css']
})
export class MultiplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
