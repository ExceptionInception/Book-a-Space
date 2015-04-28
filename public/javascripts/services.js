'use strict';

angular.module('bookaspace.services', []).
    service('BookingService', function($http){
    	var selectedSpace = [];
        var selectedDate = {};
        var reservationInfo = {};
        var selectedBlock;
        var selectedType;


        return {

            setReservationInfo: function(reservation) {

                if(selectedBlock === "AM") {
                    reservation.roomRate = selectedSpace.amRate;
                } else {
                    reservation.roomRate = selectedSpace.pmRate;
                }

                if(reservation.parking) {
                    reservation.parkingRate = 10;
                } else {
                    reservation.parkingRate = 0;
                }

                reservationInfo = reservation;
            },

            getReservationInfo: function() {
                return reservationInfo;
            },

            setBlock: function(block) {
                selectedBlock = block;
            },

            getBlock: function() {
                return selectedBlock;
            },

            setType: function(type) {
                selectedType = type;
            },

            getType: function() {
                return selectedType;
            },

            setDate: function(date) {
                selectedDate = date;
            },

            getDate: function() {
                return selectedDate;
            },

            setSpace: function(workspace) {
            	selectedSpace = workspace;
            },

            getSpace: function() {
            	return selectedSpace;
            },

            placeOrder: function() {
                reservationInfo._id = selectedSpace._id + '-' + selectedDate.getMonth().toString() + 
                    selectedDate.getDate().toString() + selectedDate.getFullYear().toString() +
                    selectedBlock;
                reservationInfo.status= "Pending"
                reservationInfo.workspaceID = selectedSpace._id;

                reservationInfo.dateOf = selectedDate;
                reservationInfo.dateOf.setHours(0);
                reservationInfo.dateOf.setMinutes(0);
                reservationInfo.dateOf.setSeconds(0);
                reservationInfo.block = selectedBlock;

                console.log(reservationInfo.block);

                $http.post('api/reservations/', reservationInfo)
                    .success(function(data,status,headers, config) {

                    })
                    .error(function(data,status,headers, config) {
                        console.log(data);
                    });



                //console.log(reservationInfo);
            }
        };
    });

