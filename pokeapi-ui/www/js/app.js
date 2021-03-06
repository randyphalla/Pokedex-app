// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var pokeapi = angular.module('pokeapi', ['ionic', 'ui.router']);

console.log(pokeapi);

pokeapi.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

// Routes
pokeapi.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'partials/home.html',
            controller: 'pokemonCtrl'
        })

        .state('pokemons', {
            url: '/pokemons',
            templateUrl: 'partials/pokemon-list.html',
            controller: 'pokemonsCtrl'
        })

        .state('pokemon', {
            url: '/pokemon/:pokemonID',
            templateUrl: 'partials/pokemon-details.html',
            controller: 'pokemonDetailsCtrl'
        });

    $urlRouterProvider.otherwise('/home');

});