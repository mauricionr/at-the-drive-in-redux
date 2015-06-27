import { Component, View, Http, httpInjectables, bind } from 'angular2/angular2';
import { magnetURI, MoviesAPI } from '../../utils/API';
import { Inject } from 'angular2/di';
import { NgFor } from 'angular2/directives';

interface Movie {
  title: string;
}

@Component({
  selector: 'movie-list',
  appInjector: [MoviesAPI]
})
@View({
  directives: [NgFor],
  template:`
    <div *ng-for="#movie of movies">{{movie.title}}</div>
  `
})
export class MovieList {

  movies: Array<Movie>;
  moviesSubscription;

  constructor(@Inject(MoviesAPI) private moviesAPI: MoviesAPI) {

    this.moviesSubscription = moviesAPI.getMovies()
      .subscribe((r) => {

        this.movies = r;

      });

  }

  onDestroy() {
    //Clean up subscription, abort XHR request
    this.moviesSubscription.dispose();
  }

}
