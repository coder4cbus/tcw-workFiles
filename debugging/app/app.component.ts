import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h3>Debugging {{name}}</h3>`,
})
export class AppComponent  { name = 'Angular'; }
