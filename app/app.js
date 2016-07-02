'use strict';

var app = angular.module('ShoppingListApp', ['ui.bootstrap']);

// shop list controller
app.controller('ShoppingListController', ['$scope','$http', function($scope, $http){
    
    $scope.title = 'My shopping list';
    
    // todo: get the initial list from json file
    $scope.shopList = [];
    
    $scope.errorText = '';
    
    $http.get('list.json').then(
        function(response){
            $scope.shopList = response.data.shopList;
        },
        function(response){
            // something went wrong...
        }
    );
    
    
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
