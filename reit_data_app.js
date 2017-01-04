var app = angular.module('reitDataApp', []);

app.controller('reitDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.reitDatas = $window.reitDatas;
    $scope.sortBy = "";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.reitDatas.length);
        for (var i = 0; i < $scope.reitDatas.length; i++) {
            if (parseFloat($scope.reitDatas[i].prevClosed) != NaN) {
                $scope.reitDatas[i].displayPrevClosed = parseFloat($scope.reitDatas[i].prevClosed);
            }
            
            if (parseFloat($scope.reitDatas[i].dpu) != NaN) {
                $scope.reitDatas[i].displayDpu = parseFloat($scope.reitDatas[i].dpu);
            }

            $scope.reitDatas[i].displayYield = $scope.displayYield($scope.reitDatas[i]);

            var tmpNav = $scope.reitDatas[i].nav.replace("$", "");
            if (parseFloat(tmpNav) != NaN) {
                $scope.reitDatas[i].displayNav = parseFloat(tmpNav);
            } else {
                $scope.reitDatas[i].displayNav = 0;
            }

            var tmpGearing = $scope.reitDatas[i].gearing.replace("%", "");
            if (parseFloat(tmpGearing) != NaN) {
                $scope.reitDatas[i].displayGearing = parseFloat(tmpGearing);
            } else {
                $scope.reitDatas[i].displayGearing = 0;
            }
        }
    };
    
    $scope.displayYield = function(reitData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (parseFloat(reitData.ttlDpu) != NaN) {
            ttlDpu = parseFloat(reitData.ttlDpu);
        }
            
        if (parseFloat(reitData.prevClosed) != NaN) {
            prevClosed = parseFloat(reitData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed);
            } 
        }
        
        var tmpYield = reitData.yield.replace("%", "");
        if (parseFloat(tmpYield) != NaN) {
            return parseFloat(tmpYield);
        } else {
            return 0;
        }
    };
   
}]);

var appShipping = angular.module('shippingDataApp', []);

appShipping.controller('shippingDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.shippingDatas = $window.shippingDatas;
    $scope.sortBy = "";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.shippingDatas.length);
        for (var i = 0; i < $scope.shippingDatas.length; i++) {
            if (parseFloat($scope.shippingDatas[i].prevClosed) != NaN) {
                $scope.shippingDatas[i].displayPrevClosed = parseFloat($scope.shippingDatas[i].prevClosed);
            }
            
            if (parseFloat($scope.shippingDatas[i].dpu) != NaN) {
                $scope.shippingDatas[i].displayDpu = parseFloat($scope.shippingDatas[i].dpu);
            }

            $scope.shippingDatas[i].displayYield = $scope.displayYield($scope.shippingDatas[i]);

            var tmpNav = $scope.shippingDatas[i].nav.replace("$", "");
            if (parseFloat(tmpNav) != NaN) {
                $scope.shippingDatas[i].displayNav = parseFloat(tmpNav);
            } else {
                $scope.shippingDatas[i].displayNav = 0;
            }
        }
    };
    
    $scope.displayYield = function(shippingData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (parseFloat(shippingData.ttlDpu) != NaN) {
            ttlDpu = parseFloat(shippingData.ttlDpu);
        }
            
        if (parseFloat(shippingData.prevClosed) != NaN) {
            prevClosed = parseFloat(shippingData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed);
            } 
        }
        
        var tmpYield = shippingData.yield.replace("%", "");
        if (parseFloat(tmpYield) != NaN) {
            return parseFloat(tmpYield);
        } else {
            return 0;
        }
    };
}]);

var appOther = angular.module('otherDataApp', []);

appOther.controller('otherDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.otherDatas = $window.otherDatas;
    $scope.sortBy = "";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.otherDatas.length);
        for (var i = 0; i < $scope.otherDatas.length; i++) {
            if (parseFloat($scope.otherDatas[i].prevClosed) != NaN) {
                $scope.otherDatas[i].displayPrevClosed = parseFloat($scope.otherDatas[i].prevClosed);
            }
            
            if (parseFloat($scope.otherDatas[i].dpu) != NaN) {
                $scope.otherDatas[i].displayDpu = parseFloat($scope.otherDatas[i].dpu);
            }

            $scope.otherDatas[i].displayYield = $scope.displayYield($scope.otherDatas[i]);

            var tmpNav = $scope.otherDatas[i].nav.replace(/[A-Z\$]+/g, "")
            if (parseFloat(tmpNav) != NaN) {
                $scope.otherDatas[i].displayNav = parseFloat(tmpNav);
            } else {
                $scope.otherDatas[i].displayNav = 0;
            }
        }
    };
    
    $scope.displayYield = function(otherData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (parseFloat(otherData.ttlDpu) != NaN) {
            ttlDpu = parseFloat(otherData.ttlDpu);
        }
            
        if (parseFloat(otherData.prevClosed) != NaN) {
            prevClosed = parseFloat(otherData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed);
            } 
        }
        
        var tmpYield = otherData.yield.replace("%", "");
        if (parseFloat(tmpYield) != NaN) {
            return parseFloat(tmpYield);
        } else {
            return 0;
        }
    };
}]);

var appSti = angular.module('stiDataApp', []);

appSti.controller('stiDataCtrl', ['$scope', '$window', function($scope, $window) {
    $scope.stiDatas = $window.stiDatas;
    $scope.sortBy = "";
    $scope.debugMode = true;
  
    $scope.init = function() {
        console.log("angular scope: " + $scope.stiDatas.length);
    };
    
    $scope.displayYield = function(stiData) {
        var ttlDpu = 0;
        var prevClosed = 0;
        
        if (parseFloat(stiData.ttlDpu) != NaN) {
            ttlDpu = parseFloat(stiData.ttlDpu);
        }
            
        if (parseFloat(stiData.prevClosed) != NaN) {
            prevClosed = parseFloat(stiData.prevClosed);
        }
           
        if (ttlDpu > 0) {
            if (prevClosed > 0) {
                return (ttlDpu / prevClosed).toFixed(3) + "%";
            } 
        } 
        
        return stiData.yield;
    };
   
}]);

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("appReit"), ['reitDataApp']);
    angular.bootstrap(document.getElementById("appOther"), ['otherDataApp']);
    angular.bootstrap(document.getElementById("appShipping"), ['shippingDataApp']);
    angular.bootstrap(document.getElementById("appSti"), ['stiDataApp']);
});