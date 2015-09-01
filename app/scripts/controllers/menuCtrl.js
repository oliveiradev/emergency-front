'use strict';

angular.module("emergencyApp").controller("menuCtrl" , function($scope){
    $scope.menuItens = [
    {name:"Ocorrências",url:"#/ocorrencias"},
    {name:"Usuários pendentes",url:"#/pendentes"}
    ];

    $scope.selectedIndex = 0;

    $scope.itemClicked =  function ($index) {
        $scope.selectedIndex = $index;
    };


});