var app = angular.module('reitDataApp', []);

app.controller('reitDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.reitDatas = $window.reitDatas;
    $scope.sortBy = "descr";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.reitDatas.length);
    };
    
    $scope.displayYield = function(reitData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (!Number.isNaN(reitData.ttlDpu)) {
            ttlDpu = parseFloat(reitData.ttlDpu);
        }
            
        if (!Number.isNaN(reitData.prevClosed)) {
            prevClosed = parseFloat(reitData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed).toFixed(3) + "%";
            } 
        } 
        
        return reitData.yield;
    };
   
}]);
