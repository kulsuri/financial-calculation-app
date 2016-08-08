"use strict";

angular.module("MyModule")

    .controller('npvCtrl', ['$scope', '$http', function ($scope, $http) {
        
        $scope.addCashFlowFields = function(){
            if($scope.years > 100){
            
            } else if($scope.years < 1){
                $scope.year = 0;
            } else {
                $scope.cashFlowsArray = [];

                for (var i=0; i < $scope.years; ++i){
                    $scope.cashFlowsArray.push({});
                }
            }
        };
                
        $scope.sendPost = function(){
            if($scope.discountRate === undefined){
                console.log("discount rate missing"); 
                window.alert("discount rate missing");
            } else if($scope.initialInvestment === undefined){
                console.log("initial investment missing");
                window.alert("initial investment missing");
            } else if($scope.years === undefined){
                console.log("missing number of years");
                window.alert("missing number of years");
            } else {
                var cashFlow = [];
                var missingCashFlowYearField = false;
                for (var i=0; i < $scope.cashFlowsArray.length; ++i){
                    if($scope.cashFlowsArray[i].value === undefined || $scope.cashFlowsArray[i].value === null){
//                        console.log("missing a cash flow field for year " + (i+1));
                        console.log("missing a cash flow field(s)");
                        window.alert("missing a cash flow field(s)");
                        var missingCashFlowYearField = true;
                        $scope.npv = null;
                        break;
                    } else {
                        cashFlow.push($scope.cashFlowsArray[i].value);
                    }
                }
                if(missingCashFlowYearField !== true){
                    $http({
                        url: '/npv',
                        method: "POST",
                        data: {
                            "discountRate": $scope.discountRate,
                            "initialInvestment": $scope.initialInvestment,
                            "years": $scope.years,
                            cashFlow
                        },
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (data, status, headers, config) {
                        $scope.npv = data;
                        console.log(data);
                    });
                } else {}
            }
        };   
    }])

    .controller('irrCtrl', ['$scope', '$http', function ($scope, $http) {

        $scope.addCashFlowFields = function(){
            if($scope.years > 100){

            } else if($scope.years < 1){
                $scope.year = 0;
            } else {
                $scope.cashFlowsArray = [];
                for (var i=0; i < $scope.years; ++i){
                    $scope.cashFlowsArray.push({});
                }
            }
        };
        
        $scope.sendPost = function(){
            if($scope.initialInvestment === undefined){
                console.log("initial investment missing");
                window.alert("initial investment missing");
            } else if($scope.years === undefined){
                console.log("missing number of years");
                window.alert("missing number of years");
            } else {
                var cashFlow = [];
                cashFlow.push($scope.initialInvestment);
                var missingCashFlowYearField = false;
                for (var i=0; i < $scope.cashFlowsArray.length; ++i){
                    if($scope.cashFlowsArray[i].value === undefined || $scope.cashFlowsArray[i].value === null){
                        //                        console.log("missing a cash flow field for year " + (i+1));
                        console.log("missing a cash flow field(s)");
                        window.alert("missing a cash flow field(s)");
                        var missingCashFlowYearField = true;
                        $scope.irr = null;
                        break;
                    } else {
                        cashFlow.push($scope.cashFlowsArray[i].value);
                    }
                }
                if(missingCashFlowYearField !== true){
                    $http({
                        url: '/irr',
                        method: "POST",
                        data: {
                            cashFlow
                        },
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }).success(function (data, status, headers, config) {
                        $scope.irr = data;
                        console.log(data);
                    });
                } else {}
            }
        };   

    }]);
