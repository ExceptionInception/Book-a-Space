'use strict';

angular.module('bookaspace.services', []).
    service('BookingService', function(){
    	var selectedSpace = [];

        return {

            setSpace: function(workspace) {
            	selectedSpace = workspace;
            },

            getSpace: function() {
            	return selectedSpace;
            }
        };
    });

