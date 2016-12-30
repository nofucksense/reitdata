var app = angular.module('reitDataApp', []);

app.controller('reitDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.reitDatas = $window.reitDatas;
    $scope.sortBy = "";
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

var appShipping = angular.module('shippingDataApp', []);

appShipping.controller('shippingDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.shippingDatas = $window.shippingDatas;
    $scope.sortBy = "";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.shippingDatas.length);
    };
    
    $scope.displayYield = function(shippingData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (!Number.isNaN(shippingData.ttlDpu)) {
            ttlDpu = parseFloat(shippingData.ttlDpu);
        }
            
        if (!Number.isNaN(shippingData.prevClosed)) {
            prevClosed = parseFloat(shippingData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed).toFixed(3) + "%";
            } 
        } 
        
        return shippingData.yield;
    };
   
}]);

var appOther = angular.module('otherDataApp', []);

appOther.controller('otherDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.otherDatas = $window.otherDatas;
    $scope.sortBy = "";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.otherDatas.length);
    };
    
    $scope.displayYield = function(otherData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (!Number.isNaN(otherData.ttlDpu)) {
            ttlDpu = parseFloat(otherData.ttlDpu);
        }
            
        if (!Number.isNaN(otherData.prevClosed)) {
            prevClosed = parseFloat(otherData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed).toFixed(3) + "%";
            } 
        } 
        
        return otherData.yield;
    };
   
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("appReit"), ['reitDataApp']);
    angular.bootstrap(document.getElementById("appOther"), ['otherDataApp']);
    angular.bootstrap(document.getElementById("appShipping"), ['shippingDataApp']);
});