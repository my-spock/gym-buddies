(function () {

	angular.module('gym-buddies.auth', [])
		.component('authComponent', {
			templateUrl: 'app/components/auth/auth.html',
			controller: AuthController
		})
		.service('AuthService', AuthService)


	function AuthController(AuthService) {
		var ac = this;

		ac.$onInit = activate;

		function activate() {
			AuthService.getAuth();
			ac.member = AuthService.member;
		}

		ac.login = function () {
			clearError()
			AuthService.login(ac.auth).catch(handleError).then(function(res){
				if(res.message){
					ac.error = res.message;
				}
			})
		}

		ac.register = function () {
			clearError()
			AuthService.register(ac.auth).catch(handleError).then(function(res){
				if(res.message){
					ac.error = res.message;
				}
			})
		}

		function handleError(err) {
			console.log(err)
			return err;
		}

		function clearError() {
			ac.error = null;
		}
	}


	function AuthService() {
		var db = new Firebase('https://gym-buddies.firebaseio.com/');
		var authService = this;
		authService.member = {}

		this.getAuth = function () {
			var authData = db.getAuth()
			if (authData) {
				var userRef = db.child('users').child(authData.uid);
				userRef.on('value', setMember)
			}
		}
		
		function handleError(err) {
			console.log(err)
			return err;
		}

		this.login = function (user, errorHandler) {
			return db.authWithPassword(user).catch(errorHandler).then(function (authData) {
				if(authData.error){
					return authData.error;
				}
				authService.getAuth();
			})
		}

		this.register = function (user, errorHandler) {
			return db.createUser(user).catch(errorHandler).then(function (authData) {
				if(authData.error){
					return authData.error;
				}
				user.authData = authData;
				db.child('users').child(authData.uid).set(user)
				authService.login(user)
			})
		}

		this.logout = function () { authService.member.off('value', setMember); db.unauth(); authService.member = {} }

		function setMember(snapshot) {
			var memberData = snapshot.val();
			if (memberData) {
				Object.keys(memberData).forEach(function (prop) {
					authService.member[prop] = memberData[prop];
				})
			}
		}
	}

} ())