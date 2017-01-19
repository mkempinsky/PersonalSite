angular
	.module('app', ['ui.router'])
	.config(appConfig);

	appConfig.$inject= ['$urlRouterProvider', '$stateProvider'];

	function appConfig($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('dashboard');

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				controller: 'DashboardController as dashCtrl',
				templateUrl: 'dashboard/dashboard.html'
			})
			.state('aboutMe',{
				url: '/aboutMe', 
				controller: 'AboutMeController as aboutCtrl',
				templateUrl: 'aboutMe/aboutMe.html'
			})
<<<<<<< Updated upstream
=======
			.state('projects',{
				url: '/projects',
				controller: 'ProjectsController as projectsCtrl',
				templateUrl: 'projects/projects.html'
			})
			.state('codeWars',{
				url: '/codeWars',
				controller: 'CodeWarsController as codeWarsCtrl',
				templateUrl: 'codeWars/codeWars.html'
			})
>>>>>>> Stashed changes
			.state('contact', {
				url: '/contact', 
				controller: 'ContactController as contactCtrl',
				templateUrl: 'contact/contact.html'
			})
			.state('projects', {
				url: '/projects', 
				controller: 'ProjectsController as projectsCtrl',
				templateUrl: 'projects/projects.html'
			});


			// .state('projects',{
			// 	url: '/projects',
			// 	abstract: true,
			// 	templateUrl:'projects/projects.html'
			// })
			// 	.state('projects.dash', {
			// 		url: '/myProjects',
			// 		controller: 'ProjectsController as projectsCtrl',
			// 		templateUrl: 'projects/projects.dash.html'
			// 	})
			// 	.state('projects.noshSpot', {
			// 		url: '/myProjects/noshSpot',
			// 		controller: 'NoshSpotController as noshCtrl',
			// 		templateUrl: 'projects/projects.nosh.html'
			// 	})
			// 	.state('projects.whiim',{
			// 		url: '/myProjects/whiim',
			// 		controller: 'WhiimController as whiimCtrl',
			// 		templateUrl: 'projects/projects.whiim.html'
			// 	})
			
			
			
	}
