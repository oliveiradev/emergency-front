'use strict';

angular.module("emergencyApp").controller("mapCtrl", function($scope , mapService,points){
      $scope.points = points.data.occurrences;

      L.mapbox.accessToken = 'pk.eyJ1Ijoib2xpdmVpcmFkZXYiLCJhIjoiMTM3OWIxNTAwNzYwMTRkOGJkZmFjNDhhNDNlYmYzYjQifQ.cotxH9LSDb3EDjkvJ9jJ4w';
      // Create a map in the div #map
      var map = L.mapbox.map('map', 'mapbox.streets')
      .setView([-9.663933, -36.679688], 8).featureLayer.setGeoJSON($scope.points);



});