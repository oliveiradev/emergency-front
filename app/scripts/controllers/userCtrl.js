'use strict';

angular.module('emergencyApp').controller('userCtrl'
  , function($scope , users , userService,$location, ngToast){
    $scope.users = users.data.users;

    $scope.confirmUser = function(id){
        userService.confirmUser(id).success(function(data,status){
            if(status == 200){
                ngToast.create({
                  className: 'alert alert-success',
                  content: 'Usuário criado com sucesso.'
                });
                $scope.users = [];
                $scope.users = data.users;
            }
        }).error(function(data,status){
            console.log(data);
        });
    };

});