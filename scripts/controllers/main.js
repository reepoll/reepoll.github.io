'use strict';

// jQuery
$(document).ready(function() {
  $('.header').on('click', 'li', function(){
    $('.header li').removeClass('active');
    $(this).addClass('active');
  })
});

/**
 * @ngdoc function
 * @name reepollgithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reepollgithubioApp
 */

/*
angular.module('reepollgithubioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

*/

