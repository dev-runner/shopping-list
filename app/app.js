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
    
    $scope.title = 'My shopping list';
    
    // todo: get the initial list from json file
    $scope.shopList = [];
    
    $scope.errorText = '';
    
    // add new item to the shopping list
    $scope.addItem = function(){
        if(!$scope.newItem) return;
        if($scope.shopList.indexOf($scope.newItem) == -1){
            $scope.shopList.push($scope.newItem);
            $scope.newItem = '';
        } else {
            $scope.errorText = 'This item is already in the shopping list.';
        }
        
    }
    
    // removes the item from the shopping list
    $scope.removeItem = function(index){
        $scope.errorText = '';
        $scope.shopList.splice(index,1);
    }
    
}]);
