import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  <div>
<h3>Administration View!</h3>
<p>Admin function01</p>
<p>Admin function02</p>
<p>...</p>
</div>`
  ,
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}