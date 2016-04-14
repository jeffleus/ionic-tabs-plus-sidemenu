// test.ctrl.js
(function () {
    'use strict';
    var controllerId = 'TestCtrl';

    angular
        .module('eligcalc.tests')
        .controller(controllerId, Test);

	Test.$inject = ['$log'];
	
    function Test($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.test = {type:'ACT', score:'38'};
	}
})();