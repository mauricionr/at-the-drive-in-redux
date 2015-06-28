import { Component, View, onInit, onDestroy } from 'angular2/angular2';
import { MoviesAPI } from '../../utils/API';
import { Inject } from 'angular2/di';
import { NgFor } from 'angular2/directives';

interface Movie {
  title: string;
}

@Component({
  selector: 'movie-list',
  lifecycle: [onInit, onDestroy]
})
@View({
  directives: [NgFor],
  template:`
    <div *ng-for="#movie of movies">
      <h4>{{movie.title}}</h4>
      <img src={{movie.image}} />
      <button (^click)="onMovieSelect($event, movie)">Play</button>
    </div>
  `
})
export class MovieList {

  movies: Array<Movie>;
  moviesSubscription;

  constructor(private moviesAPI: MoviesAPI) {

    this.moviesSubscription = moviesAPI.getMovies()
      .subscribe((r) => {

        this.movies = r;

      });

  }

  onMovieSelect(e, movie) {
    this.moviesAPI.watchTorrent(movie.magnet)
      .subscribe(res => console.log(res))
  }

  onInit() {
    console.log('Movie List Component Instantiated')
  }

  onDestroy() {
    //Clean up subscription, abort XHR request
    this.moviesSubscription.dispose();
  }

}
