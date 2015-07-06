var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var angular2_1 = require('angular2/angular2');
var di_1 = require('angular2/di');
var forms_1 = require('angular2/forms');
var Search = (function () {
    function Search(fb, moviesAPI) {
        this.fb = fb;
        this.moviesAPI = moviesAPI;
    }
    Search.prototype.submit = function (query) {
        console.log('searching', query.value);
    };
    Search.prototype.onInit = function () {
        console.log('Search Component Instantiated');
        this.query = '';
        this.searchForm = this.fb.group({
            query: ["Hello", forms_1.Validators.required],
        });
    };
    Search.prototype.onDestroy = function () {
    };
    Search = __decorate([
        angular2_1.Component({
            selector: 'search',
            lifecycle: [angular2_1.onInit, angular2_1.onDestroy],
            appInjector: [forms_1.FormBuilder]
        }),
        angular2_1.View({
            directives: [forms_1.NgModel, forms_1.NgFormModel],
            template: "\n    <form class=\"navbar-form navbar-right\" onsubmit=\"return false;\" [ng-form-model]=\"searchForm\">\n      <div class=\"form-group\">\n        <input type=\"text\" #tquery ng-control=\"query\" placeholder=\"Search for a movie!\" class=\"form-control\">\n        <button (^click)=\"submit(tquery)\">Submit</button>\n      </div>\n    </form>\n  "
        }),
        __param(0, di_1.Inject(forms_1.FormBuilder))
    ], Search);
    return Search;
})();
exports.Search = Search;
