(function(){
	angular.module('gym-buddies')
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('home', {
					url: '',
					template: '<home-component></home-component>'
				})
				.state('auth', {
					abstract: true,
					template: '<auth-component></auth-component><div class="content"><ui-view></ui-view></div>'
				})
				.state('auth.members', {
					url: '/members',
					template: '<members-component></members-component>'
				})
		})
}())