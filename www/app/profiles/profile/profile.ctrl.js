// profile.js
(function () {
    'use strict';
    var controllerId = 'ProfileCtrl';

    angular
        .module('eligcalc.profiles')
        .controller(controllerId, Profile);

	Profile.$inject = ['$log'];
	
    function Profile($log) {
        /*jshint validthis: true*/
        var self = this;
        $log.log('Controller Init: ' + controllerId);
        self.student = {first:'Jeff', last:'Leininger'};
		self.showProfileLink = true;
		$log.info('Show Profile Link?: ' + self.showProfileLink);
	}
})();