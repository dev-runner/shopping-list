'use strict';

var dependencies = ['ngRoute', 'ngAnimate', 'ngTouch', 'ui.bootstrap'];
var app = angular.module('myApp', dependencies);

app.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
	$locationProvider.hashPrefix('!');

	// default route
	$routeProvider.otherwise({
		redirectTo: '/'
	});

}]);

