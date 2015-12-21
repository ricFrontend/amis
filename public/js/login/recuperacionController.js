AmisApp.recuperacion = (function(AmisApp) {
	"use strict";

	var app = {
		init: function() {
			$(".panel--container").css( "width", "580px" );
			$(".panel--container").css( "max-height", "768px" );
			this.validateForm();
			this.returnLogin();
		},
		validateForm: function() {
			var container = $(".panel--container"),
				consultaContainer = $("#consultaContainer");
			$("#formLoginPass").validate({
				submitHandler: function(form) {
					$("#btnPassword, #btnPassLogin").toggleClass("btn--hide");
					$("#mensajeExitoPass").toggleClass("hidden");
					$(".textfield, .subtitle").css("display", "none");
					$(".form__password").css("padding", "182px 0px");
					// consultaContainer.empty();
					// consultaContainer.load( "./public/templates/lista-consulta.html");
				},
				messages: {
				    passwordUser: {
				      required: "Campo requerido",
				      // maxlength: jQuery.validator.format("solo {0} caracteres requeridos"),
				      // equalTo: "Usuario incorrecto"
				    },
				    passwordUserConf: 'Campo requerido'
				}
			});
		},
		returnLogin: function() {
			var container = $(".panel--container");
			$('#btnPassLogin').click(function() {
				var container = $(".panel--container");
				container.empty();
				Backbone.history.navigate('', true);
			});
		}
	}
	return app;
})(AmisApp);

(function(){
	AmisApp.recuperacion.init();
})();