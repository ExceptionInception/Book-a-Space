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

function workspaceadminCtrl($scope, $http, $modal) {
  $http.get('/api/workspaces').
    success(function(data, status, headers, config) {
       $scope.workspaces = data;
    });

  $scope.editWorkspace = function (size, workspace) {
    var modalInstance = $modal.open({
      templateUrl: 'partials/editWorkspace',
      controller: 'editWorkspace',
      size: size,
      resolve: {
        workspace: function () {
          return workspace;
        }
      }
    });

    modalInstance.result.then(function (editedWorkspace) {
      workspace.type = editedWorkspace.type;
      workspace.agency = editedWorkspace.agency;
      workspace.floor = editedWorkspace.floor;
      workspace.room = editedWorkspace.room;
      workspace.size = editedWorkspace.size;
      workspace.amRate = editedWorkspace.amRate;
      workspace.pmRate = editedWorkspace.pmRate;
      workspace.inventory = editedWorkspace.inventory;
    }, function() {

    });
  }

  $scope.deleteWorkspace = function (workspace) {

    var modalInstance = $modal.open({
      templateUrl: 'partials/deleteWorkspace',
      controller: 'deleteWorkspace',
      resolve: {
        workspace: function () {
          return workspace;
        }
      }
    });

    modalInstance.result.then(function (removedWorkspace) {
      console.log($scope.workspaces);
      var index = $scope.workspaces.indexOf(removedWorkspace);
      $scope.workspaces.splice(index,1);
    }, function() {

    });

  }
}

function editWorkspace($http, $scope, $modalInstance, workspace) {
  $scope.workspace = {};
  $scope.id = workspace._id;

  $scope.workspace.type = workspace.type;
  $scope.workspace.agency = workspace.agency;
  $scope.workspace.floor = workspace.floor;
  $scope.workspace.room = workspace.room;
  $scope.workspace.size = workspace.size;
  $scope.workspace.amRate = workspace.amRate;
  $scope.workspace.pmRate = workspace.pmRate;
  $scope.workspace.inventory = workspace.inventory;

  $scope.commitEdit = function () {
    $http.put('api/workspaces/' + $scope.id, $scope.workspace).
      success(function(data, status, headers, config) {
        $modalInstance.close($scope.workspace);
        // possibly indicate success to the user?
      }).error(function(data, status, headers, config) {
        console.log("Could not edit workspace " + $scope.id);
      })
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.addItem = function(item) {
    $scope.workspace.inventory.push(item);
  }

  $scope.removeItem = function(item) {
    var index = $scope.workspace.inventory.indexOf(item);
    $scope.workspace.inventory.splice(index, 1);
  }
}

function deleteWorkspace($http, $scope, $modalInstance, workspace) {
  $scope.workspace = workspace;

  $scope.delete = function () {
    $http.delete('api/workspaces/' + $scope.workspace._id).
      success(function(data, status, headers, config) {
        $modalInstance.close($scope.workspace);
      }).error(function(data, status, headers, config) {
        console.log("Could not delete workspace.")
      })
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

}



