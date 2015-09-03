angular.module("emergencyApp").factory("mapService" , function($http){
    var _getPoints = function(){
        return $http.get("http://localhost:3000/api/v1/geojson");
    };

    return {
        getPoints: _getPoints
    };
});