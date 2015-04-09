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

function findaspaceCtrl($scope, $http) {

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

function workspaceResultsCtrl($scope, $http, $window, BookingService) {
    $http.get('/api/workspaces').
    success(function(data, status, headers, config) {
       $scope.workspaces = data;
    });

    $scope.pickSpace = function (workspace) {
        BookingService.setSpace(workspace);
  };
}

function bookingformCtrl($scope, $http, BookingService) {
  $scope.test = BookingService.exampleValue;
  function loadspace() {
    $scope.workspace = BookingService.getSpace();
  }

  loadspace();
}

function loginCtrl($scope, $http) {
  
}

function workspaceadminCtrl($scope, $http) {
  $http.get('/api/workspaces').
    success(function(data, status, headers, config) {
       $scope.workspaces = data;
    });

}



