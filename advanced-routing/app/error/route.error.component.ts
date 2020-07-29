import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <div>
<h3>Route Error!</h3>
<p>The Current route is invalid!</p>
</div>`
  ,
  styleUrls: ['./route.error.component.css']
})

export class RouteErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
