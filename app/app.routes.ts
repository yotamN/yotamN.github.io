/// <reference path="../typings/angularjs/angular.d.ts"/>
/// <reference path="../typings/route.d.ts"/>

angular
	.module('app')
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
	        templateUrl: 'app/components/login/loginView.html',
			controller: 'loginCtrl'
	    });
		
		$routeProvider.when('/students', {
	        templateUrl: 'app/components/students/studentsView.html',
			controller: 'studentsCtrl'
	    });
	}]);