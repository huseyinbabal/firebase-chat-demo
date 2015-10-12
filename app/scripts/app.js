'use strict';

/**
 * @ngdoc overview
 * @name firebaseChatDemoApp
 * @description
 * # firebaseChatDemoApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseChatDemoApp', [
    'ngRoute',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl',
        controllerAs: 'chat'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
