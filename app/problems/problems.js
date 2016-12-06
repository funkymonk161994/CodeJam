'use strict';

/**
 * @ngdoc function
 * @name codeJamApp.controller:ProblemsCtrl
 * @description
 * # ProblemsCtrl
 * Controller of the codeJamApp
 */
angular.module('codeJamApp')
  .controller('ProblemsCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/problems/1', {
        templateUrl: 'problems/problem1/problem1.html',
        controller: 'Problem1Ctrl',
        controllerAs: 'problem1'
      });
  });
