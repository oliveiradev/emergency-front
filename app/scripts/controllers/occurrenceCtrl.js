'use strict';

angular.module('emergencyApp')
.controller('occurrenceCtrl' , function($scope , occurrences){
    $scope.occurrences = occurrences.data.occurrences;

});