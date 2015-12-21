AmisApp.password = (function(AmisApp) {
	"use strict";
	var _private = {
		fetchData: function() {
			return AmisApp.getConfig();
		}
	};
	var app = {
		init: function() {
			$(".panel--container").css( "width", "580px" );
			$(".panel--container").css( "height", "686px" );
			this.validateForm();
			this.returnLogin();
		},
		validateForm: function() {
			var container = $(".panel--container");
			$("#formLoginPass").validate({
				submitHandler: function(form) {
					$("#btnPassword, #btnPassLogin").toggleClass("btn--hide");
					$("#mensajeExitoPass").toggleClass("hidden");
					// $("#btnPassLogin").toggleClass("btn--hide");
				},
				/*rules:{
					passwordUser:{
					}
				},*/
				messages: {
				    passwordUser: {
				      required: "Campo requerido"
				    }
				}
			});
		},
		returnLogin: function() {
			$('#btnPassLogin').click(function() {
				var container = $(".panel--container");
				container.empty();
				container.load( "./public/templates/login.html");
			});
		}
	}
	return app;
})(AmisApp);

$(document).ready(function() {
	(function(){
		AmisApp.password.init();
	})();
});