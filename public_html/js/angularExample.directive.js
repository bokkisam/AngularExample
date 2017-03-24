/*
The ngApp/ng-app directive designates the root element of the application and 
is typically placed near the root element of the page - 
e.g. on the <body> or <html> tags.
Use this ng-app directive to auto-bootstrap an AngularJS application.
*/

/*
To register a directive, you use the module.directive API. 
module.directive takes the normalized directive name followed by a factory function. 
This factory function should return an object with the different options to tell 
$compile how the directive should behave when matched.

The factory function is invoked only once when the compiler matches the directive for 
the first time. You can perform any initialization work here. 
*/
/* global appModule */

appModule.directive("w3TestDirective1", function() {
    return {
        restrict: "C",
        template: "<h2>This is made by a test directive1!</h2>"
    };
});

appModule.directive("w3TestDirective2", function() {
    return {
        template: "<h3>{{dir2Msg}}<h3><br><h3>{{dirMsg}}</h3>"
    };
});

appModule.directive("w3TestDirective3", function() {
    return {
        restrict: "A",
        templateUrl: "w3-test-directive3.html"
    };
});

appModule.directive("rootScopeColorDirective", function() {
    return {
        template: "<li>The rootScope's favorite color: {{color}} </li>"
    };
});