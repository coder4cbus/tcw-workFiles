import { Component } from '@angular/core';

@Component({
    selector: "fancy-checkbox",
    styleUrls: ["./fancy-checkbox.component.css"],
    template: "<label><input type='checkbox'/><span></span>Styled Check Box</label>"
})
export class FancyCheckbox {
}