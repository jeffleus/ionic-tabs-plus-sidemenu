// app.module.js
(function() {
    'use strict';

    angular
        .module('eligcalc', ['ionic', 
							 'blocks.router', 
							 'eligcalc.core', 
							 'eligcalc.controllers', 'eligcalc.calculator', 'eligcalc.tests', 
							 'eligcalc.profiles', 'eligcalc.transcript']);

})();