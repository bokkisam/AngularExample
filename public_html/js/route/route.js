/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var routeModule = angular.module('routeModule',[]);

routeModule.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
                when('/test1', {templateUrl: 'test1.html', controller: Test1Ctrl}).
                when('/test2', {templateUrl: 'test2.html', controller: Test2Ctrl}).
                otherwise({redirectTo: '/test1'});
}]);

routeModule.controller('rootController', ['$rootScope', function($rootScope){
        $rootScope.header = 'Welcome';
}]);

routeModule.controller('Test1Ctrl', ['$rootScope', function($rootScope) {
    $rootScope.header = 'Test 1';
}]);

routeModule.controller('TestCtrl2', ['$rootScope', function($rootScope) {
    $rootScope.header = 'Test 2';
}]);