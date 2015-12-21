AmisApp.consultaGestor = (function(AmisApp) {
	"use strict";
	var _private = {
		fetchData: function() {
			return AmisApp.getConfig();
		}
	};
	var app = {
		init: function() {
			var container = $(".panel--container");
			container.css( "width", "1324px" );
			container.css( "height", "645px" );
			this.validateForm();
			this.returnLogin();
		},
		validateForm: function() {
			var container = $(".panel--container"),
				consultaContainer = $("#consultaContainer");
			$("#formConsulta").validate({
				submitHandler: function(form) {
					consultaContainer.empty();
					consultaContainer.load( "./public/templates/lista-consulta.html");
				},
				/*rules:{
					loginName:{
					}
				},*/
				messages: {
				    consultaPoliza: 'Campo requerido'
				}
			});
		},
		returnLogin: function() {
			var container = $(".panel--container");
			$('#logoutGestor').click(function() {
			
				container.empty();
				container.load( "./public/templates/login-gestor.html");
			});
		}
	}
	return app;
})(AmisApp);

(function(){
	AmisApp.consultaGestor.init();
})();