'use strict';

//https://google-styleguide.googlecode.com/svn/trunk/javascriptguide.xml#Internet_Explorer_s_Conditional_Comments

//http://www.mircozeiss.com/how-to-pass-javascript-variables-from-a-server-to-angular/

//https://github.com/fdietz/recipes-with-angular-js-examples/blob/master/chapter10/recipe1/contacts/views/layout.jade

// Issues GET commands to get data from dbase.
// These are page-wide ctrls, but specific HTML
// tags can have specific controllers. Calls Root
// app.js.

function testCtrl($scope, $http) {

  $http.get('/api/workspaces').
    success(function(data, status, headers, config) {
       $scope.name = data.name;
       $scope.class = "myClassName";
    });
}

function testCtrl2($scope, $http) {
  $http.get('/api/test2').
    success(function(data, status, headers, config) {
       $scope.test2_name = data.test2_name;
    });
}

function Test_3_Inline_Controller($scope) {
  $scope.greeting = 'Test_3_Inline_Controller';
}

function WorkspaceTypeButtonsCtrl ($scope) {

  $scope.checkModel = {
    conferenceRm: false,
    office: false,
    cubicle: false
  }
}

function DatePickerCtrl ($scope) {
    $scope.today = function() {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function () {
    $scope.dt = null;
  };

  // Disable weekend selection
  $scope.disabled = function(date, mode) {
    return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
  };

  $scope.toggleMin = function() {
    $scope.minDate = $scope.minDate ? null : new Date();
  };
  $scope.toggleMin();

  $scope.open = function($event) {
    $event.preventDefault();
    $event.stopPropagation();

    $scope.opened = true;
  };

  $scope.dateOptions = {
    formatYear: 'yy',
    startingDay: 1
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0]
}

function workspaceResultsCtrl($scope, $http) {
    $http.get('/api/workspaces').
    success(function(data, status, headers, config) {
       $scope.workspaces = data;
       $scope.class = "myClassName";
    });
}

function bookingformCtrl($scope, $http) {

}

function loginCtrl($scope, $http) {
  
}

angular.module('bookaspace', []).controller('Test_3_Inline_Controller', Test_3_Inline_Controller)



