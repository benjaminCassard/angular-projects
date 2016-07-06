angular.module('FirstApp', [
  'ngRoute',
  'mobile-angular-ui',
  'FirstApp.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});