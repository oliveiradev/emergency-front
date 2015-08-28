'use strict';

angular.module('emergencyApp')
.controller('occurrenceCtrl' , function($scope , occurrenceService){
    $scope.occurrences = [];

    $scope.getOccurrences = function(){
        occurrenceService.getOccurrences().success(function(data){
            $scope.occurrences = data.occurrences;
        }).error(function(data , status){

        });
    };

    $scope.getOccurrences();
});