'use strict';

angular.module('emergencyApp').factory('occurrenceService' , function($http){
    var _getOccurrences = function(){
        return $http.get("http://localhost:3000/api/v1/occurrences");
    };

    return {
        getOccurrences: _getOccurrences
    };
});