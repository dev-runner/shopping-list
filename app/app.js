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
    
    $scope.errorText = '';
    
    $scope.addItem = function(){
        if(!$scope.newItem) return;
        if($scope.shopList.indexOf($scope.newItem) == -1){
            $scope.shopList.push($scope.newItem);
            $scope.newItem = '';
        } else {
            $scope.errorText = 'This item is already in the shopping list.';
        }
        
    }
    
    $scope.removeItem = function(index){
        $scope.errorText = '';
        $scope.shopList.splice(index,1);
    }
    
}]);
