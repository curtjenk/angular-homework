var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {

//these are in the country-code-lookup.js
    $scope.isoCountries = isoCountries;
    $scope.convertCountryCode = convertCountryCode;
//-------------------------

    $scope.countries = [];

    function Country(name, pop, leader, flagColors, flagImgSrc) {
        this.name = name;
        this.population = pop;
        this.leader = leader;
        this.flagColors = flagColors;
        this.flagImgSrc = flagImgSrc;
    }

    Country.prototype.toString = function() {
        return this.name + 'has ' + this.population + ' people and is lead by ' + this.leader;
    };

    //ng-blur
    $scope.dataChange = function() {
        // console.log($scope.name.length);
        // console.log($scope.population.length);
        // console.log($scope.leader.length);
        // console.log($scope.flagColors.length);
        if ($scope.name.length > 0 && $scope.population.length > 0 && $scope.leader.length > 0 && $scope.flagColors.length > 0) {
            var newCountry = new Country($scope.convertCountryCode($scope.name), $scope.population, $scope.leader, $scope.flagColors);
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
        $scope.flag="flags/1x1/" + code + ".svg";
    };
});
