//module
var app = angular.module('soulAsylum', ['ngRoute']).value('$anchorScroll', angular.noop);

//routes
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl : 'pages/about.html',
      controller : 'mainController'
    })
    .when('/artists', {
      templateUrl : 'pages/artists.html',
      controller : 'artistsController'
    })
    .when('/releases', {
      templateUrl : 'pages/releases.html',
      controller : 'releasesController'
    })
    .when('/videos', {
      templateUrl : 'pages/videos.html',
      controller : 'videosController'
    })
    .when('/events', {
      templateUrl : 'pages/events.html',
      controller : 'eventsController'
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller : 'contactController'
    });
});

//controller
app.controller('mainController', function($scope){
  
});

app.controller('artistsController', function($scope){
  
});

app.controller('contactController', function($scope){
  
});

app.controller('videosController', function($scope){
  
});