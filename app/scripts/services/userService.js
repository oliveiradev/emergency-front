'use strict';

angular.module('emergencyApp').factory('userService' , function($http){
    var _getPendings = function(){
        return $http.get("http://localhost:3000/api/v1/not-checked-users");
    };

    var _confirmUser = function(id){
        return $http.get("http://localhost:3000/api/v1/confirm-user/"+id);
    };

    return {
      getPendings: _getPendings,
      confirmUser: _confirmUser
    };
});