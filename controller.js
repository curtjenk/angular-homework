var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope, $http) {

    //these are in the country-code-lookup.js
    $scope.isoCountries = isoCountries;
    $scope.convertCountryCode = convertCountryCode;
    //-------------------------

    $scope.countries = [];
    $scope.flag = '';

    $scope.sortField = 'name';

    function Country(name, pop, leader, flag) {
        this.name = name;
        this.population = pop;
        this.leader = leader;
        this.flag = flag;
    }

    Country.prototype.toString = function() {
        return this.name + 'has ' + this.population + ' people and is lead by ' + this.leader;
    };
    $scope.countries.push(new Country('United States', '320,000,000', 'Barack Obama', 'flags/1x1/us.svg'));
    $scope.countries.push(new Country('Brazil', '200,000,000', 'El Presidente', 'flags/1x1/BR.svg'));
    $scope.countries.push(new Country('Japan', '1,200,000,000', 'Abe', 'flags/1x1/us.svg'));
    $scope.countries.push(new Country('Germany', '1,200,000,000', 'Gauck', 'flags/1x1/us.svg'));

    //ng-blur
    $scope.dataChange = function() {
        // console.log($scope.name.length);
        // console.log($scope.population.length);
        // console.log($scope.leader.length);
        console.log($scope.flag);
        if ($scope.name.length > 0 && $scope.population.length > 0 && $scope.leader.length > 0) {
            var newCountry = new Country($scope.convertCountryCode($scope.name), $scope.population, $scope.leader, $scope.flag);
            $scope.countries.push(newCountry);
            $scope.name = '';
            $scope.population = '';
            $scope.leader = '';
            $scope.flagColors = '';
        }
    };

    $scope.addCountry = function() {
        $scope.dataChange();
    };

    //passing $index
    $scope.removeCountry = function(n) {
        // console.log("remove country");
        $scope.countries.splice(n, 1);
    };

    $scope.getFlag = function(code) {
        $scope.flag = "flags/1x1/" + code + ".svg";
    };
});
