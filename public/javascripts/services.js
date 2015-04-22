'use strict';

angular.module('bookaspace.services', []).
    service('BookingService', function(){
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
            }
        };
    });

