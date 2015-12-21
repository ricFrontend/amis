AmisApp.condiciones = (function(AmisApp) {
	"use strict";
	var _private = {
		fetchData: function() {
			return AmisApp.getConfig();
		}
	};
	var app = {
		init: function() {
			$(".panel--container").css( "width", "1324px" );
			$(".panel--container").css( "height", "662px" );
			this.validateCheckbox();
			this.returnLogin();
			this.toggleBtn();
			this.validateSubmit();
		},
		validateCheckbox: function() {
			var me = this;

			$('#check1').change(function() {
				me.toggleBtn();      
		    });	
		},
		validateSubmit: function() {
			var container = $(".panel--container");
			$("#formConditions").validate({
				submitHandler: function(form) {
					container.empty();
					container.load( "./public/templates/consulta.html");
				}
			});
		},
		toggleBtn: function() {
			var nextBtn = document.getElementById("btnNextConditions");
			nextBtn.disabled = !nextBtn.disabled ? true : false;
			$("#btnNextConditions").toggleClass("btn--disabled");
		},
		returnLogin: function() {
			$('#btnBackConditions').click(function() {
				var container = $(".panel--container");
				container.empty();
				container.load( "./public/templates/login.html");
			});
		}
	}
	return app;
})(AmisApp);

(function(){
	AmisApp.condiciones.init();
})();