'use strict'
var weatherApp=angular.module('myapp',[])
weatherApp.controller('weather',function($scope,$http){
    $http.get('https://api.openweathermap.org/data/2.5/weather?q=Ha Noi&appid=985c62101f928538713a23dc3d0e2e9f&')
    .success(function(data){
        if(data){
            $scope.current=data.main.temp;
            $scope.temp_min=data.main.temp_min;
            $scope.temp_max=data.main.temp_max;
            $scope.wind_speed=data.wind.speed;
            $scope.clouds=data.clouds=true ?data.clouds.all: undefined;
            // if($scope.clouds=true){
            //     $scope.clouds=data.clouds.all
            // }else{
            //     $scope.clouds=undefined
            // }
            var baseUrl = 'https://ssl.gstatic.com/onebox/weather/128/';
            if($scope.clouds<200){
                $scope.img_url=baseUrl+'sunny.png'
            }else if($scope.clouds<90){
                $scope.img_url=baseUrl+'partly_cloudy.png'
            }else {
                $scope.img_url=baseUrl+'cloudy.png'
            }
        }
    })
    .error(function(data,status){
        console.log(data)
    })
})  