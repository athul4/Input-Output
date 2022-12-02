import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input()
  myName:String='Athul';
  @Output()
  sendMessageEmitter = new EventEmitter();

  messageToParent(e:any){
    this.sendMessageEmitter.emit(e.target.value);
  }

}
