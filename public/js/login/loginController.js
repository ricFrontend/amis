AmisApp.login = (function(AmisApp) {
	"use strict";
	var _private = {
		fetchData: function() {
			return AmisApp.getConfig();
		}
	};
	var app = {
		init: function() {
			// debugger;
			$(".panel--container").css( "width", "580px" );
			$(".panel--container").css( "height", "768px" );
			this.validateForm();
			this.bindActions();
			// debugger;
		},
		validateForm: function() {
			var container = $(".panel--container");
			/*var userData = _private.fetchData(),
				formData = this.fetchFormData();
			var Usuario = userData.user;*/
				// debugger;
			$("#formLoginAccess").validate({
				submitHandler: function(form) {
					// debugger;
					container.empty();
					container.load( "./public/templates/condiciones.html");
					
				},
				/*rules:{
					loginName:{
					}
				},*/
				messages: {
				    loginName: {
				      required: "Campo requerido",
				      // maxlength: jQuery.validator.format("solo {0} caracteres requeridos"),
				      // equalTo: "Usuario incorrecto"
				    },
				    loginPassword: 'Campo requerido'
				}
			});
		},
		fetchFormData: function() {
			var formObj = document.forms['formLoginAccess'].elements,
				elements = $("input[type!='submit'], textarea, select");
			// debugger;
			return formObj;
		},
		bindActions: function() {
			var container = $(".panel--container");
			$("#btnRecoverPass").on('click', function() {
				container.empty();
				container.load( "./public/templates/password.html");
			});
		}
	}
	return app;
})(AmisApp);

(function(){
	AmisApp.login.init();
})();