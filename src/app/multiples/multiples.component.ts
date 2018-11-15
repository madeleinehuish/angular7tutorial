import { Component, OnInit } from '@angular/core';

//this demonstrates how you can change selector to be an attribute instead of a component
//can also do inline component or styling as so, instead of templateUrl and styleUrls
@Component({
  selector: '[app-multiples]',
  template: '<app-server></app-server><app-server></app-server><div class="blue">I should be blue</div>',
  styles: [`
    .blue {
      color: blue;
      }
    `]
})
export class MultiplesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
