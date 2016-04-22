// profiles.routes.js
(function () {
    'use strict';
    var controllerId = 'ProfilesRoutes';
    
    angular
        .module('eligcalc.profiles')
        .run(appRun);

	appRun.$inject = ['routerHelper'];
	
    function appRun(routerHelper) {
        routerHelper.configureStates( getStates() );
	}
	
	function getStates() {
		return [
			{
				state: 'app.profiles',
				config: {
					url: '/profiles',
					views: {
      					'menu-content': {
        					templateUrl: "app/profiles/profiles.html",
        					controller: 'ProfilesCtrl as vm'
      					}
					}
				}
			},
			{
				state: 'app.profile',
				config: {
					url: "/profile",
					views: {
					  'menu-content': {
						abstract: true,
						templateUrl: "app/profiles/profile/profile.html",
						controller: 'ProfileCtrl as vm'
					  }
					}
				}
			},
      		{
				state: 'app.profile.details',
				config: {
					url: "/details",
					views: {
					  'tab-details': {
						templateUrl: "app/profiles/profile/details/profile-details.html",
						controller: 'ProfileDetailsCtrl as vm'
					  }
					}
				}
			},

			{
				state: 'app.profile.transcripts',
				config: {
					url: "/transcripts",
					views: {
					  'tab-transcripts': {
						templateUrl: "app/profiles/profile/transcripts/profile-transcripts.html",
						controller: 'ProfileTranscriptsCtrl as vm'
					  }
					}
				  }
			},

			{
				state: 'app.profile.tests',
				config: {
					url: "/tests",
					views: {
					  'tab-tests': {
						templateUrl: "app/profiles/profile/tests/profile-tests.html",
						controller: 'ProfileTestsCtrl as vm'
					  }
					}
				  }
			},
			{
				state: 'app.profile.schools',
				config: {
					url: "/schools",
					views: {
					  'tab-schools': {
						templateUrl: "app/profiles/profile/schools/profile-schools.html",
						controller: 'ProfileSchoolsCtrl as vm'
					  }
					}
			  	}
			}
		];
	}
})();