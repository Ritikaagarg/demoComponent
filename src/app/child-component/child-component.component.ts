import { Component, OnInit } from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  @Input('parentData') parentData:string;

  @Output() greetEvent = new EventEmitter();
  name = 'Everyone';
  constructor() { }

  ngOnInit() {
  }

  callParentGreet() {
    this.greetEvent.emit(this.name);
  }


}
