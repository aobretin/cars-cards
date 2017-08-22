function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });

  $stateProvider
  .state('List', {
    url: '/',
    controller: 'ListCtrl as list',
    templateUrl: 'list.html',
    title: 'Cards list'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
