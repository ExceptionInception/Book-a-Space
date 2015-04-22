'use strict';

function testCtrl($scope, $http) {

  $http.get('/api/workspaces').
    success(function(data, status, headers, config) {
       $scope.name = data.name;
       $scope.class = "myClassName";
    });
}

function appctrl($scope, $http) {

  $scope.currentUser = 'DefaultUser';

  $scope.setCurrentUser = function ($user) {
     if ($user=='')
        $scope.currentUser='DefaultUser';
     else
        $scope.currentUser = $user;
  }

  $scope.getCurrentUser = function () {
      return $scope.currentUser;
  }

  $scope.activeSession = function () {
      if ($scope.currentUser == "DefaultUser")
         return true;
      return false;
  }
}

function findaspaceCtrl($scope, $http, BookingService, $location) {

  $scope.block = 'AM';
  $scope.type = "Cubicle";

  $scope.findSpaces = function() {
    BookingService.setDate($scope.dt);
    BookingService.setBlock($scope.block);
    BookingService.setType($scope.type);
    $location.url('/workspaceresults');

  };

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
  $scope.format = $scope.formats[0];
}

function workspaceResultsCtrl($scope, $http, $window, BookingService) {
    var date = BookingService.getDate();
    var block = BookingService.getBlock();
    var type = BookingService.getType();

    $http.get('/api/workspaces/available?' + 'day=' + date.getDate() + '&month=' + date.getMonth()
      + '&year=' + date.getFullYear() + '&block=' + block + '&type=' + type).
    success(function(data, status, headers, config) {
       $scope.workspaces = data;
    });

    $scope.pickSpace = function (workspace) {
        BookingService.setSpace(workspace);
  };
}

function bookingformCtrl($scope, $http, BookingService, $location) {

  $scope.reservation = {
    parking: false,
    userName: "",
    userAgency: "",
    userEmail: "",
    glCode: "6351500",
    sapFund: "",
    costCenter: "",
    budgetPeriod: "",
    supervisorName: "",
    supervisorEmail: ""

  };

  function loadspace() {
    $scope.workspace = BookingService.getSpace();
  }

  loadspace();

  $scope.setReservationInfo = function() {
    BookingService.setReservationInfo($scope.reservation);
    $location.url('/confirmreservation');
  };


}

function loginCtrl($scope, $http, $location) {

   $scope.credentials = {
      username: '',
      password: ''
   };

   $scope.location = $location;

   $scope.userMenu = true;

   $scope.loginState = "Login";

   $scope.login = function(credentials) {
      $scope.setCurrentUser (credentials.username);
   }

   $scope.activeLogin = function() {
      $scope.loginState = 'Login';
      $scope.userMenu = true;
      $scope.location.url('/');
   }

   $scope.$on('onActiveLogin', function(event, username, password) {
      $scope.setCurrentUser (username);
      $scope.loginState = 'Logout';
      $scope.userMenu = false;
      $scope.location.url('/');
   });
}

function loginCtrl2($scope, $http, $location) {
   $scope.login = function(credentials) {
      $scope.$emit('onActiveLogin', credentials.username, credentials.password);
   }
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

function reservationadminCtrl($scope, $http, $modal) {

  $http.get('/api/reservations').
    success(function(data, status, headers, config) {
       $scope.reservations = data;
    });

  $scope.editReservation = function (size,reservation) {
    var modalInstance = $modal.open({
      templateUrl: 'partials/editReservation',
      controller: 'editReservation',
      size: size,
      resolve: {
        reservation: function () {
          return reservation;
        }
      }
    });

    modalInstance.result.then(function (editedReservation) {
      reservation.reserverName = editedReservation.reserverName;
      reservation.reserverEmail = editedReservation.reserverEmail;
      reservation.supervisorName = editedReservation.supervisorName;
      reservation.supervisorEmail = editedReservation.supervisorEmail;
      reservation.sapFund = editedReservation.sapFund;
      reservation.status = editedReservation.status;
    }, function() {

    });


  }

  $scope.removeReservation = function (reservation) {
    var modalInstance = $modal.open({
      templateUrl: 'partials/removeReservation',
      controller: 'deleteReservation',
      resolve: {
        reservation: function () {
          return reservation;
        }
      }
    })
  }
}

function editReservation($http, $scope, $modalInstance, reservation) {

  $scope.reservation = {};
  $scope.id = reservation._id;

  $scope.reservation.reserverName = reservation.reserverName;
  $scope.reservation.reserverEmail = reservation.reserverEmail;
  $scope.reservation.supervisorName = reservation.supervisorName;
  $scope.reservation.supervisorEmail = reservation.supervisorEmail;
  $scope.reservation.sapFund = reservation.sapFund;
  $scope.reservation.block = reservation.block;
  $scope.reservation.glCode = reservation.glCode;
  $scope.reservation.status = reservation.status;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.submit = function() {
    $http.put('/api/reservations/' + $scope.id, $scope.reservation).
      success(function(data,status,headers, config) {
        $modalInstance.close($scope.reservation);
      }).error(function(date,status,headers,config) {
        console.log("Could not edit reservation " + $scope.id);
      })
  };
}

function deleteReservation($http, $scope, $modalInstance, reservation) {

  $scope.id = reservation._id;
  $scope.reservation = reservation;

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.remove = function() {
    $http.delete('/api/reservations/' + $scope.id).
      success(function(data,status,headers, config) {
        $modalInstance.close();
      }).error(function(date,status,headers,config) {
        console.log("Could not remove reservation " + $scope.id);
      })
  }
}

function confirmReservationCtrl($http, $scope, BookingService) {
  $scope.workspace = BookingService.getSpace();
  $scope.reservation = BookingService.getReservationInfo();

  $scope.placeOrder = function() {
    BookingService.placeOrder();
  };
}