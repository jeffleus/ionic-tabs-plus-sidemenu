// tests.routes.js
(function () {
    'use strict';
    var controllerId = 'TestRoutes';
    
    angular
        .module('eligcalc.tests')
        .run(appRun);

	appRun.$inject = ['routerHelper'];
	
    function appRun(routerHelper) {
        routerHelper.configureStates( getStates() );
	}
	
	function getStates() {
		return [
			{
				state: 'app.test',
				config: {
					url: '/test',
					views: {
      					'menu-content': {
        					templateUrl: "app/tests/test.html",
        					controller: 'TestCtrl as vm'
      					}
					}
				}
			}
		];
	}
})();