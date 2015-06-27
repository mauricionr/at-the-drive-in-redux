import { Component, View, Http, httpInjectables, bind } from 'angular2/angular2';
import { magnetURI, MoviesAPI } from '../../utils/API';
import { Inject } from 'angular2/di';
import { NgFor } from 'angular2/directives';

interface Movie {
  title: string;
}

@Component({
  selector: 'movie-list',
  appInjector: [MoviesAPI, Http]
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

  constructor(@Inject(MoviesAPI) private moviesAPI: MoviesAPI, @Inject(Http) http: Http) {

    this.movies = [{ title: 'yoyo' }];

    this.moviesSubscription = moviesAPI.getMovies(http)
      .subscribe((r) => {

        r.data.movies.map((movie) => {
          this.movies.push({
            title: movie.title_long,
            magnet: magnetURI(movie.torrents[0].hash, movie.title_long)
          })
        })

        console.log(this.movies)

      });

  }

  onDestroy() {
    //Clean up subscription, abort XHR request
    this.moviesSubscription.dispose();
  }

}
