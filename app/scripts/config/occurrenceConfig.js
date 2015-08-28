angular.module('emergencyApp').config(function($routeProvider){
    $routeProvider.when("/ocorrencias" , {
        templateUrl: "views/occurrence.html",
        controller: "occurrenceCtrl"
    });

    $routeProvider.otherwise({redirectTo: "/ocorrencias"});
});