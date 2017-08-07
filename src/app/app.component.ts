import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'my-app',
      templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    template: `
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>
    `
})

export class AppComponent {
    title = 'Tour Of Heroes';

}
