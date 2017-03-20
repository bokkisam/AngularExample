/* global appModule */

/*
    Factory
    A factory is an injectable function. A factory is a lot like a service 
    in the sense that it is a singleton and dependencies can be specified 
    in the function. The difference between a factory and a service is 
    that a factory injects a plain function so AngularJS will call the function and 
    a service injects a constructor. A constructor creates a new object so new is 
    called on a service and with a factory you can let the function return anything you want. 
    As you will see later on, a factory is a provider with only a $get method.
*/
appModule.factory('MathService', function(){
    var factory = {};

    factory.add = function(a, b) {
        return a+b;
    };

    factory.subtract = function(a,b) {
        return a-b;
    };

    factory.multiply = function(a,b) {
        return a*b;
    };

    factory.divide = function(a, b) {
        return a/b;
    };

    return factory;
});

/*
    Service
    Use Service when you need just a simple object such as a Hash, for example {foo:1, bar:2} 
    It's easy to code, but you cannot instantiate it. A service is an injectable constructor. 
    If you want you can specify the dependencies that you need in the function. 
    A service is a singleton and will only be created once by AngularJS. 
    Services are a great way for communicating between controllers like sharing data.
*/
appModule.service('CalcService', function(MathService) {
    this.sum = function(a, b) {
        return MathService.add(a, b);
    };

    this.difference = function(a, b) {
        return MathService.subtract(a, b);
    };

    this.product = function(a, b) {
        return MathService.multiply(a, b);
    };

    this.division = function(a, b) {
        return MathService.divide(a, b);
    };
});

appModule.service('PersonDbService', function() {

    this.addPerson = function(personsDb, firstName, lastName, country) {
        var testKey = firstName + " " + lastName;
        var keyFound = false;
        var keyValFound = false;
        for (var i = 0; i < personsDb.length; i++) {
            var key = personsDb[i]['name'];
            if (testKey === key) {
                keyFound = true;
                if (personsDb[i]['country'] === country) {
                    keyValFound = true;
                    alert(key + " from " + country + " already present!");
                    break;
                }
            }
        }
        if (keyValFound === false) {
            personsDb.push({ name: testKey, country: country });
        }
    };

    this.removePersonId = function (personsDb, index) {
        personsDb.splice(index, 1);
    };

});