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
					url: '/calculator',
					views: {
      					'menu-content': {
        					templateUrl: "app/calculator/calculator.html",
        					controller: 'CalculatorCtrl as vm'
      					}
					}
				}
			}
		];
	}
})();