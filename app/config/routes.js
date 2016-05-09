(function(){
	angular.module('gym-buddies')
		.config(function($stateProvider, $urlRouterProvider){
			
			$stateProvider
				.state('home', {
					url: '',
					template: '<home-component></home-component>'
				})
				.state('members', {
					url: '/members',
					template: '<members-component></members-component>'
				})
		})
}())