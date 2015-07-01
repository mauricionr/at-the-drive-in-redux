import { Component, View, onInit, onDestroy } from 'angular2/angular2';
import { MoviesAPI } from '../../utils/API';
import { Inject } from 'angular2/di';
import {Validators, ControlGroup, FormBuilder, NgModel, NgFormModel} from 'angular2/forms';

@Component({
  selector: 'search',
  lifecycle: [onInit, onDestroy],
  appInjector: [FormBuilder]
})
@View({
  directives: [NgModel, NgFormModel],
  template:`
    <form class="navbar-form navbar-right" onsubmit="return false;" [ng-form-model]="searchForm">
      <div class="form-group">
        <input type="text" #tquery (keyup)="submit(tquery)" ng-control="query" placeholder="Search for a movie!" class="form-control">
      </div>
    </form>
  `
})
export class Search {

  searchForm: ControlGroup;
  query: string;

  constructor(@Inject(FormBuilder) private fb: FormBuilder, private moviesAPI: MoviesAPI) {

  }

  submit(query:{value:string}) {
    // call search here
  }

  onInit() {
    console.log('Search Component Instantiated')

    this.query= '';

    this.searchForm = this.fb.group({
      query: ["Hello", Validators.required], // required
    });
  }

  onDestroy() {

  }

}
