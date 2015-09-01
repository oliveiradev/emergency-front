'use strict';

angular.module('emergencyApp').config(function($routeProvider){
    $routeProvider.when("/pendentes" , {
        templateUrl: "views/user.html",
        controller: "userCtrl",
        resolve: {
            users: function(userService){
                return userService.getPendings();
            }
        }
    });

});