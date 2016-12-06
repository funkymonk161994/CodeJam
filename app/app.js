'use strict';

/**
 * @ngdoc overview
 * @name codeJamApp
 * @description
 * # codeJamApp
 *
 * Main module of the application.
 */
angular
  .module('codeJamApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'welcome/welcome.html',
        controller: 'WelcomeCtrl',
        controllerAs: 'welcome'
      })
      .when('/problems', {
        templateUrl: 'problems/problems.html',
        controller: 'ProblemsCtrl',
        controllerAs: 'problems'
      })
      .when('/contact', {
        templateUrl: 'contact/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
