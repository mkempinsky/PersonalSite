angular.module('app', ['ui.router'])
	.config(appConfig);

	appConfig.$inject= ['$urlRouterProvider', '$stateProvider'];

	function appConfig($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('dashboard');

		$stateProvider
			.state('dashboard', {
				url: '/dashboard',
				controller: 'DashboardController as dashCtrl',
				templateUrl: 'src/dashboard/dashboard.html'
			})
			.state('aboutMe',{
				url: '/aboutMe', 
				controller: 'AboutMeController as aboutCtrl',
				templateUrl: 'src/aboutMe/aboutMe.html'
			})
			.state('projects',{
				url: '/projects',
				controller: 'ProjectsController as projectsCtrl',
				templateUrl: 'src/projects/projects.html'
			})
			.state('contact', {
				url: '/contact', 
				controller: 'ContactController as contactCtrl',
				templateUrl: 'src/contact/contact.html'
			});
	}