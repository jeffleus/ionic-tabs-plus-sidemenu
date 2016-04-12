// EligCalc Ionic App
(function() {
    'use strict';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('eligcalc')

//.run(function($ionicPlatform, $window) {
//  $ionicPlatform.ready(function() {
//    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//    // for form inputs)
//    if ($window.cordova && $window.cordova.plugins.Keyboard) {
//      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//    }
//    if ($window.StatusBar) {
//      // org.apache.cordova.statusbar required
//      StatusBar.styleDefault();
//    }
//  });
//})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.profiles', {
    url: "/profiles",
    views: {
      'menu-content': {
        templateUrl: "app/profiles/profiles.html",
        controller: 'ProfilesCtrl as vm'
      }
    }
  })

  .state('app.profile', {
    url: "/profile",
    views: {
      'menu-content': {
        abstract: true,
        templateUrl: "app/profiles/profile.html",
        controller: 'ProfileCtrl as vm'
      }
    }
  })

      .state('app.profile.details', {
        url: "/details",
        views: {
          'tab-details': {
            templateUrl: "app/profiles/profile-tabs/profile-details.html",
            controller: 'ProfileDetailsCtrl as vm'
          }
        }
      })

      .state('app.profile.transcripts', {
        url: "/transcripts",
        views: {
          'tab-transcripts': {
            templateUrl: "app/profiles/profile-tabs/profile-transcripts.html",
            controller: 'ProfileTranscriptsCtrl as vm'
          }
        }
      })

      .state('app.profile.tests', {
        url: "/tests",
        views: {
          'tab-tests': {
            templateUrl: "app/profiles/profile-tabs/profile-tests.html",
            controller: 'ProfileTestsCtrl as vm'
          }
        }
      })

      .state('app.profile.schools', {
        url: "/schools",
        views: {
          'tab-schools': {
            templateUrl: "app/profiles/profile-tabs/profile-schools.html",
            controller: 'ProfileSchoolsCtrl as vm'
          }
        }
      })

  .state('app.search', {
    url: "/search",
    views: {
      'tab-search': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'tab-browse': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('app.playlists', {
    url: "/playlists",
    views: {
      'menu-content': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menu-content': {
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/profiles');
});

})();