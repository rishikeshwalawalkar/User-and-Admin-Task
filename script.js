// Code goes here

var app = angular.module("app" , []);
app.controller("weathercontroller" , function($scope , $http){
    $http.get("https://api.github.com/users").success(function(data){
    $scope.forecast = data;
    
    
    })
  $scope.toAdmin = function(userid){
    for(var i in $scope.forecast){
      if($scope.forecast[i].id == userid){
        $scope.forecast[i].site_admin = true;
      }
    }
  }
    
});

/*var arr[];
    for (var i in $scope.forecast){ 
    $http.get("$scope.forecast[i].followers_url").success(function(data1){
      arr.push(data1.length);
    })
    $scope.followers = arr;
   }*/
   
   
  // for followers id did not work!!
