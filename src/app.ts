import 'reflect-metadata';

import { bootstrap, Component, View } from 'angular2/angular2';

import {routerInjectables} from 'angular2/router';

import {RouteConfig, RouterOutlet, Router } from 'angular2/router';

@Component({
  selector:'app'
})
@View({
  directives: [ ],
  template: `
      <h1>Hello Angular 2 JSPM App!</h1>
  `,
})
export class App {

  constructor() { }

}

bootstrap(App, [routerInjectables]).then(
  success => console.log(success),
  error => console.log(error)
);
