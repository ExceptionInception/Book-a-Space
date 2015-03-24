/**
* Book A Space
* Copyright 2015.
* Please see LICENSE for terms of use.
*/

'use strict';

// AgularJS speciic app.js. Routes page requess to the
// actual partial views (the actual page content.) and
// inits the controller.

angular.module('bookaspace', ['ngRoute',
     'bookaspace.filters', 'bookaspace.services','bookaspace.directives']).
 config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

  $routeProvider.

    // Index page.
    when('/', {
       templateUrl: 'partials/index',
       controller: testCtrl
    }).

    // Test2 Page.
    when ('/test2', {
       templateUrl: 'partials/test2',
       controller: testCtrl2
    }).

    // Other pages.
    otherwise({
       redirectTo: '/'
    });
 
    $locationProvider.html5Mode(true);
}]);

