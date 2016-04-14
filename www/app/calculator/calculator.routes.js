// calculator.routes.js
(function () {
    'use strict';
    var controllerId = 'CalculatorRoutes';
    
    angular
        .module('eligcalc.calculator')
        .run(appRun);

	appRun.$inject = ['routerHelper'];
	
    function appRun(routerHelper) {
        routerHelper.configureStates( getStates() );
	}
	
	function getStates() {
		return [
			{
				state: 'app.calculator',
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