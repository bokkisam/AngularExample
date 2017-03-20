/*
    AngularJS controllers control the data of AngularJS applications.
    AngularJS controllers are regular JavaScript Objects.
    A controller is a JavaScript Object, created by a standard 
        JavaScript object constructor.
    Controllers are "classes" or "constructor functions" that are responsible 
        for providing the application behavior that supports the declarative 
        markup in the template. The recommended way of declaring Controllers 
        is using the array notation:    

    Unlike services, there can be many instances of the same type of controller in an application.
    Moreover, additional dependencies are made available to Controllers:
        $scope: Controllers are associated with an element in the DOM and so are 
        provided with access to the scope. 
        Note: Other components (like services) only have access to the $rootScope service.
        resolves: If a controller is instantiated as part of a route, then any values 
        that are resolved as part of the route are made available for injection into the controller.    

    In larger applications, it is common to store controllers in external files.
    And then these controller file(s) are used in an application using script include:
    e.g., <script src="angularExample.controller.js"></script>

    The scope is the binding part between the HTML (view) and the JavaScript (controller).
    The scope is the Model. The scope is a JavaScript object with properties and 
        methods, which are available for both the view and the controller.
    When you make a controller in AngularJS, you pass the $scope object as an argument:
    When adding properties to the $scope object in the controller, 
        the view (HTML) gets access to these properties. In the view, 
        you do not use the prefix $scope, you just refer to a propertyname, 
        like {{ propertyname }}.

    It is important to know which scope you are dealing with, at any time.
    For larger applications there can be sections in the HTML DOM 
        which can only access certain scopes. 
    ** Each controller will have it's own scope.
*/

/*
    A Controller can be added using controller def to your application, 
        and refer to the controller with the ng-controller directive:
    The ng-controller="angularExampleController" attribute is an AngularJS directive.
    The angularExampleController function is a JavaScript function.
*/
/* global appModule */
appModule.controller('AngularExampleController', function(){
});

var ScopeController = function($scope, COLORS) {
    // Note: Even though COLORS is a constant, the data inside it can be modified
    // Don't do this trick, this is conflict of intrest 
    COLORS.RED_COLOR = 'yellow';
    var scopeDemoObj = $scope.scopeDemoObj;
    scopeDemoObj.color = COLORS.RED_COLOR;
    scopeDemoObj.color2 = COLORS.BLUE_COLOR;
    
    console.log($scope);
};
//inject the value in the controller using its name "COLORS"
ScopeController.$inject = ['$scope', 'COLORS'];
appModule.controller('ScopeController', ScopeController);


appModule.controller('GeoController', GeoController);
function GeoController() {
    /* jshint validthis: true */
    var vm = this;
    vm.geoLocationDetails = "";
    
    vm.getGeoLocation = function() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                vm.geoLocationDetails = 
                        "Latitude: " + position.coords.latitude + 
                        ", Longitude: " + position.coords.longitude;                
            });
        } else {
            vm.geoLocationDetails = "Geolocation is not supported by this browser";
        }
    };
};

appModule.controller('DemoSwitchController', function ($scope) {
    $scope.demoFlag = true;
    $scope.demo = function () {
        console.log($scope.demoFlag ? 'Demo on' : 'Demo off');
        $scope.demoFlag = true;
    };
    $scope.closeDemo = function () {
        console.log($scope.demoFlag ? 'Demo on' : 'Demo off');
        $scope.demoFlag = false;
    };
});

/*
    AngularJS will invoke the controller with a $scope object.
    In AngularJS, $scope is the application object (the owner of application
        properties/variables and functions).
    The controller creates two properties (variables) in the scope.
    The ng-model directives bind the input fields to the controller properties.
*/
appModule.controller('InputController', function ($scope) {
    $scope.firstName = 'Vishu';
    $scope.lastName = 'Bokkisam';
    $scope.fullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
});


/*
    Inline Array Annotation
    This is the preferred way to annotate application components.
    For example:
        appModule.controller('MathController', ['$scope', 'CalcService', function($scope, CalcService) {
        // ...
        }]);
    Here we pass an array whose elements consist of a list of strings (the names of 
    the dependencies) followed by the function itself.
    When using this type of annotation, take care to keep the annotation array in sync with 
    the parameters in the function declaration.
*/
appModule.controller('MathController', ['$scope', 'CalcService', function ($scope, CalcService) {
    $scope.val1 = 1;
    $scope.val2 = 2;

    $scope.sum = function () {
        return CalcService.sum($scope.val1, $scope.val2);
    };

    $scope.diff = function () {
        return CalcService.difference($scope.val1, $scope.val2);
    };

    $scope.product = function () {
        return CalcService.product($scope.val1, $scope.val2);
    };

    $scope.division = function () {
        return CalcService.division($scope.val1, $scope.val2);
    };

}]);

/*
    $inject Property Annotation
    To allow the minifiers to rename the function parameters and still be 
    able to inject the right services, the function needs to be annotated
    with the $inject property. The $inject property is an array of service names to inject.

    var PersonRecordsController = function($scope, PersonDbService) {
        // ...
    }
    PersonRecordsController.$inject = ['$scope', 'PersonDbService'];
    appModule.controller('PersonRecordsController', PersonRecordsController);
    In this scenario the ordering of the values in the $inject array must match 
    the ordering of the parameters in PersonRecordsController.

    Just like with the array annotation, you'll need to take care to keep 
    the $inject in sync with the parameters in the function declaration.
*/
var PersonRecordsController = function ($scope, PersonDbService) {
    var prObj = $scope.prObj;
    prObj.firstName = "";
    prObj.lastName = "";
    prObj.country = "";
    prObj.names = [];

    $scope.addPersonRecord = function () {
        PersonDbService.addPerson(prObj.names, prObj.firstName, prObj.lastName, prObj.country);
    };

    $scope.removePersonRecord = function (index) {
        PersonDbService.removePersonId(prObj.names, index);
    };
};
PersonRecordsController.$inject = ['$scope', 'PersonDbService'];
appModule.controller('PersonRecordsController', PersonRecordsController);


appModule.controller('CssController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.inputBcColor = 'lightblue';
}]);


appModule.controller('FormController', ['$scope', function ($scope) {

}]);

appModule.controller('FilterController', ['$scope', function ($scope) {
    $scope.name = "Vishu Bokkisam";
    $scope.names = [
        {name:'Jani',country:'Norway'},
        {name:'Carl',country:'Sweden'},
        {name:'Margareth',country:'England'},
        {name:'Hege',country:'Norway'},
        {name:'Joe',country:'Denmark'},
        {name:'Gustav',country:'Sweden'},
        {name:'Birgit',country:'Denmark'},
        {name:'Mary',country:'England'},
        {name:'Kai',country:'Norway'}
        ];
    $scope.sortOrder = function(x) {
        $scope.mySortOrder = x;
        };
}]);

appModule.controller('DFController', ['$scope', '$timeout', '$rootScope', function ($scope, $timeout, $rootScope) {
    $scope.fName = "A";
    $scope.lName = "1";

    $timeout(function () {
        console.log();
        $scope.fullName = $scope.fName + "," + $scope.lName;
    }, 300);

    // setTimeout(function () {

    // });
}]);

appModule.controller('NgHideShowIfController', ['$scope', function ($scope) {
    $scope.user = { name: "Vishu", 
                    password: "Vishu" };
}]);

appModule.controller('NgRepeatController', ['$scope', function ($scope) {
    $scope.cars = [{ id: 1, name: "Mercedes" },
    { id: 2, name: "Audi" },
    { id: 3, name: "Nissan" },
    { id: 4, name: "Lincoln" }];

    $scope.displayCar = function () {
        console.log($scope.selectedCar.id, " ", $scope.selectedCar.name);
    };
}]);



