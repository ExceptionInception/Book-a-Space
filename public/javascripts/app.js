/**
* Book A Space
* Copyright 2015.
* Please see LICENSE for terms of use.
*/

'use strict';

// AgularJS speciic app.js. Routes page requess to the
// actual partial views (the actual page content.) and
// inits the controller.

angular.module('bookaspace', ['ngRoute', 'ui.bootstrap',
  'bookaspace.filters', 'bookaspace.services','bookaspace.directives']).
 config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider) {

  $routeProvider.

    // Index page.
    when('/', {
       templateUrl: 'partials/index',
       controller: testCtrl
    }).

    // workspace search criteria page
    when ('/findaspace', {
       templateUrl: 'partials/findaspace',
       controller: findaspaceCtrl
    }).

    when ('/workspaceresults', {
      templateUrl: 'partials/workspaceresults',
      controller: workspaceResultsCtrl
    }).

    when ('/bookingform', {
      templateUrl: 'partials/bookingform',
      controller: bookingformCtrl
    }).

    when ('/login', {
      templateUrl: 'partials/login',
      controller: loginCtrl
    }).

    when ('/workspaceadmin', {
      templateUrl: 'partials/workspaceadmin',
      controller: workspaceadminCtrl
    }).

    when ('/reservationadmin', {
      templateUrl: 'partials/reservationadmin',
      controller: reservationadminCtrl
    }).

    when ('/confirmreservation' , {
      templateUrl: 'partials/confirmreservation',
      controller: confirmReservationCtrl
    }).

    // Other pages.
    otherwise({
       redirectTo: '/'
    });
 
    $locationProvider.html5Mode(true);
}]);

