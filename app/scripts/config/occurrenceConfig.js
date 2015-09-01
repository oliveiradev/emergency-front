'use strict';

angular.module('emergencyApp').config(function($routeProvider){
    $routeProvider.when("/ocorrencias" , {
        templateUrl: "views/occurrence.html",
        controller: "occurrenceCtrl",
        resolve: {
            occurrences: function(occurrenceService){
                return occurrenceService.getOccurrences();
            }
        }
    });

    $routeProvider.otherwise({redirectTo: "/ocorrencias"});
});