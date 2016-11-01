angular.module('app', ['ui.router'])
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
			.state('projects',{
				url: '/projects',
				controller: 'ProjectsController as projectsCtrl',
				templateUrl: 'projects/projects.html'
			})
			.state('contact', {
				url: '/contact', 
				controller: 'ContactController as contactCtrl',
				templateUrl: 'contact/contact.html'
			});
	}