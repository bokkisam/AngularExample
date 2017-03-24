/*
    AngularJS modules define AngularJS applications.
    The AngularJS application is defined by  ng-app="angularExampleApp". 
    The application runs inside the HTML tag element in which it is defined.
    
    An AngularJS application consists of:
        View, which is the HTML.
        Model, which is the data available for the current view. 
        Controller, which is the JavaScript function 
            that makes/changes/removes/controls the data/application.

    If you make changes in the view, the model and the controller will be updated.
    If you make changes in the controller, the model and the view will be updated.

    The ng-controller="angularExampleController" attribute is an AngularJS directive.
    It defines a controller.
    The angularExampleController function is a JavaScript function.
    AngularJS will invoke the controller with a $scope object.
    In AngularJS, $scope is the application object (the owner of application
        properties/variables and functions).
    The controller creates two properties (variables) in the scope.
    The ng-model directives bind the input fields to the controller properties.
    In larger applications, it is common to store controllers in external files.
    And then these controller file(s) are used in an application using script include:
    e.g., <script src="angularExample.controller.js"></script>

    Root Scope ($rootScope)
        All applications have a $rootScope which is the scope created on 
            the HTML element that contains the ng-app directive.
        The rootScope is available in the entire application.
        If a variable has the same name in both the current scope and 
            in the rootScope, the application use the one in the current scope.
*/

// In this example ng-app is defined at the html tag level itself.
// The "angularExampleApp" parameter refers to an HTML element in which 
//    the application will run.
var appModule = angular.module("angularExampleApp", []);

/*
Constant:
A constant can be injected everywhere. A constant can not be intercepted by a decorator, 
that means that the value of a constant should never be changed (though it is still 
possible to change it programmatically in Angular 1.x).
*/
appModule.constant('COLORS', {RED_COLOR: "red", BLUE_COLOR: "blue"});

/*
Value:
A value is nothing more than a simple injectable value. The value can be a string, 
number but also a function. Value differs from constant in that value can not be 
injected into configurations, but it can be intercepted by decorators.
*/
// TODO:
 appModule.value('vbookmarks', 
    {ngModel: "https://docs.angularjs.org/api/ng/directive/ngModel",
    ngDevGuide: "https://docs.angularjs.org/guide",
    ngModule: "https://docs.angularjs.org/guide/module",
    ng1StyleGuide: "https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md",
    ngProvider: "https://docs.angularjs.org/guide/providers",
    ngDirective: "https://docs.angularjs.org/guide/directive",
    ngScope: "https://docs.angularjs.org/guide/scope",
    ngUnderstandScopes: "https://github.com/angular/angular.js/wiki/Understanding-Scopes",
    jsMinify: "https://jscompress.com"}
    );

/*
Module Loading & Dependencies
A module is a collection of configuration and run blocks which 
get applied to the application during the bootstrap process. 
In its simplest form the module consists of a collection of two kinds of blocks:
    1. Configuration blocks
    2. Run blocks
*/

/*
Configuration blocks - get executed during the provider registrations 
    and configuration phase. Only providers and constants can be injected 
    into configuration blocks. This is to prevent accidental instantiation 

    of services before they have been fully configured.
*/
/*
Run blocks - get executed after the injector is created and are used to 
    kickstart the application. Only instances and constants can be injected 
    into run blocks. This is to prevent further system configuration during 
    application run time.
*/
appModule.run(function($rootScope) {
    $rootScope.color = "blue";
});


//Now you can add controllers, directives, filters, and more, 
//  to your AngularJS application.

/*
Normalization
AngularJS normalizes an element's tag and attribute name to determine which elements
match which directives. We typically refer to directives by their case-sensitive
camelCase normalized name (e.g. ngModel). However, since HTML is case-insensitive, 
we refer to directives in the DOM by lower-case forms, typically using dash-delimited 
attributes on DOM elements (e.g. ng-model).

The normalization process is as follows:

Strip x- and data- from the front of the element/attributes.
Convert the :, -, or _-delimited name to camelCase.
For example, the following forms are all equivalent and match the ngBind directive:
<!--
<div ng-controller="Controller">
  Hello <input ng-model='name'> <hr/>
  <span ng-bind="name"></span> <br/>
  <span ng:bind="name"></span> <br/>
  <span ng_bind="name"></span> <br/>
  <span data-ng-bind="name"></span> <br/>
  <span x-ng-bind="name"></span> <br/>
</div>
-->
*/
