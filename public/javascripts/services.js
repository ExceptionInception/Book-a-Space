'use strict';

angular.module('bookaspace.services', []).
    service('BookingService', function(){
    	var selectedSpace = [];
        var selectedDate = {};
        var selectedBlock;

        return {
            setBlock: function(block) {
                selectedBlock = block;
            },

            getBlock: function() {
                return selectedBlock;
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

