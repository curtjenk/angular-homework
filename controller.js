
var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope) {

    $scope.countries = [];

    function Country(name, pop, leader, flagColors) {
        this.name = name;
        this.population = pop;
        this.leader = leader;
        this.flagColors = flagColors;
    }

    Country.prototype.toString = function() {
        return this.name + 'has ' + this.population + ' people and is lead by ' + this.leader;
    };

//ng-blur
    $scope.dataChange = function() {
        console.log($scope.name.length);
        console.log($scope.population.length);
        console.log($scope.leader.length);
        console.log($scope.flagColors.length);
        if ($scope.name.length > 0 && $scope.population.length > 0 && $scope.leader.length > 0 && $scope.flagColors.length > 0) {
            // && $scope.flagColors > 0) {
            // alert('here');
            var newCountry = new Country($scope.name, $scope.population, $scope.leader, $scope.flagColors);
            $scope.countries.push(newCountry);
            $scope.name = '';
            $scope.population = '';
            $scope.leader = '';
            $scope.flagColors = '';
        }
    };

    $scope.addCountry = function() {
        // alert('here');
        var newCountry = new Country($scope.name, $scope.population, $scope.leader, $scope.flagColors);
        $scope.countries.push(newCountry);
    };
});
