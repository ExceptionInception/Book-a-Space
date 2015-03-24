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

angular.module('bookaspace', []).controller('Test_3_Inline_Controller', Test_3_Inline_Controller)



