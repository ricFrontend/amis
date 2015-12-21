(function(){

	AmisApp.Router = Backbone.Router.extend({
		routes: {
			'!/login': 'index',
			'!/nueva-contrasena': 'newPassword',
			'!/login-gestor': 'loginGestor',
			'*notFound': 'redirectIndex'
		},
		redirectIndex:function() {
			Backbone.history.navigate('!/login', true);
		},
		index: function(){
			$('.panel--container').empty();
			$('.panel--container').load( "./public/templates/login.html");
		},
		newPassword: function() {
			$('.panel--container').empty();
			$('.panel--container').load( "./public/templates/recuperacion-password.html");
		},
		loginGestor: function() {
			$('.panel--container').empty();
			$('.panel--container').load( "./public/templates/login-gestor.html");
		}
	});

	new AmisApp.Router;
	Backbone.history.start();

})();