import { Component } from '@angular/core';

@Component({
  selector: 'message',
template: `
<h3>Message Component</h3>
Developer: <input type=text [(ngModel)]='developer' >
<br><input type=button value='Update' (click)='updateMessage()' >
<br>Message: {{message}}`,
})
export class MessageComponent  { 
  name = 'Angular'; 
  developer: string = '';
  message: string = 'Enter a name and click update.';
  index:number = 0;
  updateMessage(){
    let oldMsg = this.message;
    this.message = this.developer + ' is debugging ' + this.name +  ' exceptions!';
    let logmsg = "Message property updated: \n";
    logmsg += "From: " + oldMsg + "\n";
    logmsg += "  To: " + this.message + "\n";
    console.log( logmsg );
    this.index = this.index + 1;
    console.log("Message updated: " + this.index + " times!");
    return false;
  }
}
