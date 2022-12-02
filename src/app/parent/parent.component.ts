import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  myNameInParent='Ashwin';
  
  messageFromChild='';
  
  receiveMessage(message:any){
    this.messageFromChild=message;

  }

}
