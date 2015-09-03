'use strict';

angular.module('emergencyApp').config(function($routeProvider){
    $routeProvider.when("/mapa",{
        templateUrl: "views/occurrencemap.html",
        controller: "mapCtrl",
        resolve: {
            points: function(mapService){
                return mapService.getPoints();
            }
        }
    });
});