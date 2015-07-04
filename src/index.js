// import 'reflect-metadata';
// import 'zone.js';
//
// import { bootstrap, httpInjectables, Component, View } from 'angular2/angular2';
//
// import { routerInjectables, RouteConfig, RouterOutlet, Router } from 'angular2/router';
//
// import { MovieList } from './components/MovieList/MovieList';
//
// import { MoviesAPI } from './utils/API';
//
// @Component({
//   selector:'app'
// })
// @View({
//   directives: [ RouterOutlet, MovieList ],
//   template: `
//       <router-outlet></router-outlet>
//   `,
// })
// @RouteConfig([
//   { path: '/', component: MovieList, as: 'movie-list'  }
// ])
// export class App {
//
//   constructor() { }
//
// }
//
// bootstrap(App, [routerInjectables, httpInjectables, MoviesAPI]).then(
//   success => console.log(success),
//   error => console.log(error)
// );

import React from 'react'
import Root from './root';

React.render(<Root />, document.getElementById('app'))
