"use strict";

angular.module("MyModule")

//    .controller('Ctrl1', ['$scope', '$http', function ($scope, $http) {
//        $http.get('http://rest-service.guides.spring.io/greeting').
//        success(function(data) {
//            $scope.greeting = data;
//        });
//    }])
//
//    .controller('Ctrl2', ['$scope', '$http', function ($scope, $http) {
//        $http.get('http://localhost:3000/account?username=kulsuri').
//        success(function(data) {
//            $scope.response = data;
//        });
//    }])
//    
//    .controller('Ctrl3', ['$scope', '$http', function ($scope, $http) {
//        $http({
//            url: 'http://localhost:3000/account',
//            method: "POST",
//            data: {"blah": "hhhhhh"},
//            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//        }).success(function (data, status, headers, config) {
//            $scope.acc = data;
//        });
//    }])

    .controller('Ctrl4', ['$scope', '$http', function ($scope, $http) {
        
        $scope.addCashFlowFields = function(){
            if($scope.years > 100){
                
            } else {
                $scope.cashFlowsArray = [];
                for (var i=0; i < $scope.years; ++i){
                    $scope.cashFlowsArray.push({});
                }
            }
        };
        
        $scope.sendPost = function(){
            if($scope.cashFlowsArray === undefined){
                console.log("Missing fields");
            } else {
                var cashFlow = [];
                for (var i=0; i < $scope.cashFlowsArray.length; ++i){
                    cashFlow.push($scope.cashFlowsArray[i].value);
                }

                $http({
                    url: 'http://localhost:3000/npv',
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
//                    myWindowGlobalLibraryName.myCustomLog(["My library","Rules"]);
//                    Bayside.alert(1,2);

                });
            }
        };    
    }])

    .controller('Ctrl5', ['$scope', '$http', function ($scope, $http) {
                $http({
                    url: 'http://localhost:3000/npv',
                    method: "POST",
                    data: {
                        "discountRate": 10,
                        "initialInvestment": 10000,
                        "years": 3,
                        "cashFlow": [888, 777, 666]
                    },
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
//                    $scope.npv = data;
                    console.log(data);
                });
                $http({
                    url: 'http://localhost:3000/npv2',
                    method: "POST",
                    data: {
                        "discountRate": 10,
                        "initialInvestment": 10000,
                        "years": 3,
                        "cashFlow": [888, 777, 666]
                    },
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                }).success(function (data, status, headers, config) {
                    //                    $scope.npv = data;
                    console.log(data);
                });
    }]);
        


        
    
