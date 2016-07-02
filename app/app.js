'use strict';

var dependencies = ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap'];
var app = angular.module('myApp', dependencies);


// app configuration
app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
    $locationProvider.hashPrefix('!');
    
    $routeProvider.otherwise({
        redirectTo: '/'
    });

}]);


// shop list controller
app.controller('ShoppingListController',['$scope', function($scope){
    
    $scope.shopList = ['Milk', 'Butter', 'Bread', 'Cheese'];
    
    $scope.addItem = function(){
        $scope.shopList.push($scope.newItem);
    }
    
    $scope.removeItem = function(index){
        $scope.shopList.splice(index,1);
    }
    
}]);
