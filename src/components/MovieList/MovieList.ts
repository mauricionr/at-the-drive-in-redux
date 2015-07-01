import { Component, View, onInit, onDestroy } from 'angular2/angular2';
import { MoviesAPI } from '../../utils/API';
import { Inject } from 'angular2/di';
import { NgFor, NgIf } from 'angular2/directives';
import { Search } from '../Search/Search';

interface Movie {
  title: string;
}

@Component({
  selector: 'movie-list',
  lifecycle: [onInit, onDestroy]
})
@View({
  directives: [NgFor, NgIf, Search],
  template:`
    <div>
      <video *ng-if="torrent.loaded" width="900" height="450" src={{torrent.src}} preload="auto" controls></video>
      <search></search>
      <div class="movie-list">
        <div *ng-for="#movie of movies" class="movie">
          <h4>{{movie.title}}</h4>
          <img src={{movie.image}} />
          <button (^click)="onMovieSelect($event, movie)">Play</button>
        </div>
      </div>
    </div>
  `
})
export class MovieList {

  torrent: any;
  movies: Array<Movie>;
  moviesSubscription;

  constructor(private moviesAPI: MoviesAPI) {

  }

  onMovieSelect(e, movie) {
    this.moviesAPI.watchTorrent(movie.magnet)
      .subscribe(res => {
        this.torrent = {
          loaded: true,
          src: res
        }
      });
  }

  onInit() {
    console.log('Movie List Component Instantiated')

    this.torrent = {
      loaded: false
    }

    this.moviesSubscription = this.moviesAPI.getMovies()
      .subscribe((r) => {

        this.movies = r;

      });
  }

  onDestroy() {
    //Clean up subscription, abort XHR request
    this.moviesSubscription.dispose();
  }

}
