// calculator.ctrl.js
(function () {
    'use strict';
    var controllerId = 'CalculatorCtrl';
    
    angular
        .module('eligcalc.calculator')
        .controller(controllerId, Profiles);

	Profiles.$inject = ['$log'];
	
    function Profiles($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
	}
})();