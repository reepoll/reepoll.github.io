"use strict";angular.module("reepollgithubioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/portfolio",{templateUrl:"views/portfolio.html",controller:"AboutCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).otherwise({redirectTo:"/"})}]),$(document).ready(function(){$(".header").on("click","li",function(){$(".header li").removeClass("active"),$(this).addClass("active")})}),angular.module("reepollgithubioApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("reepollgithubioApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]);