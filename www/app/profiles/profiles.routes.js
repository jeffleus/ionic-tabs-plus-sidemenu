// profiles.routes.js
(function () {
    'use strict';
    var controllerId = 'ProfilesRoutes';
    
    angular
        .module('eligcalc.profiles')
        .run(appRun);

	Profiles.$inject = ['routerHelper'];
	
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
			}
		];
	}
})();