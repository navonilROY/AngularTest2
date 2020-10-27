( function() {
    "use strict";

    angular.module("myFirstApp",[])

    .controller("myFirstController", DIController);

    DIController.inject = ['$scope','$filter'];
    function DIController($scope,$filter)
    {
        $scope.name = "Navonil";
    }

    $scope.upper = function() {
        var upCase = $filter("uppercase");
        $scope.name = upCase($scope.name);
    };

} )();