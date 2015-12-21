/**
* This is AmisApp, it makes something awesome.
* It's an self invokated function that runs automatically/immediately.
*
* @class AmisApp
* @constructor
*/
var AmisApp = window.AmisApp || (function(document, window){
	"use strict";

	var app, _private;

	_private = {
		_config: {
			user: 'user123',
			password: 'admin123'
		}
	};

	app = {
	    init: function() {
			
			// $( ".panel--container" ).css( "width", "580px" );
	    },
	    getConfig: function() {
	    	return _private._config
	    },
	    Router: {}
	};

	return app;
})(document, window);


$(document).ready(function() {
	AmisApp.init();
});
