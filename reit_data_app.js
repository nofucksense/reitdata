var app = angular.module('reitDataApp', []);

app.controller('reitDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.reitDatas = $window.reitDatas;
    $scope.sortBy = "descr";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.reitDatas.length);
    };
}]);
