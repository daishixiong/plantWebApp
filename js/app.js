

var app=angular.module('myApp',['ionic']);

//创建路由  配置状态
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('login',{
        templateUrl:'login.html',
        url:'/myLogin'
    }).state('index',{
        templateUrl:'index.html',
        url:'/myIndex'
    }).state('details',{
        templateUrl:'details.html',
        url:'/myDetails'
    }).state('discuss',{
        templateUrl:'discuss.html',
        url:'/myDiscuss'
    }).state('search',{
        templateUrl:'search.html',
        url:'/mySearch'
    }).state('share',{
        templateUrl:'share.html',
        url:'/myShare'
    }).state('alarm',{
        templateUrl:'alarm.html',
        url:'/myAlarm'
    });

    $urlRouterProvider.otherwise('/myLogin');

});






