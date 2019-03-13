import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo of Component Interaction';
  //parentToChild = 'Hey! This is from parent.'
  public showchild:string;

  greet(name: string) {
    this.showchild = ('Hey ' + name);
  }
}
