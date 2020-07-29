import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div>
<h3>Home Component!</h3>
<p>{{text}}</p>
</div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  text: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce semper imperdiet lacus vitae posuere. Etiam fringilla dignissim massa, consequat vehicula urna pharetra quis. Integer nec mi vel lectus convallis porta a vel turpis.";
  constructor() { }
  ngOnInit() {}
}
