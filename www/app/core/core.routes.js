// core.routes.js
(function() {

    'use strict';
	angular
		.module('eligcalc.core')
		.config(configRoutes);

	configRoutes.$inject = ['$stateProvider', '$urlRouterProvider'];
			
	function configRoutes($stateProvider, $urlRouterProvider) {
		$stateProvider

		.state('app', {
			url: "/app",
			abstract: true,
			templateUrl: "templates/menu.html",
			controller: 'AppCtrl'
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
	}

})();