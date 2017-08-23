import translations from './translations';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $translateProvider) {
  'ngInject';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  Object.keys(translations).forEach(function(language) {
    $translateProvider.translations(language, translations[language]);
  });

  $translateProvider.preferredLanguage('en');

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
  })
  .state('AddCard', {
    url: '/add-card',
    controller: 'AddCardCtrl as add',
    templateUrl: 'directives/add-card.html',
    title: 'Add new card'
  })
  .state('CardDetails', {
    url: '/card-details?id',
    controller: 'CardDetailsCtrl as details',
    templateUrl: 'directives/card-details.html',
    title: 'Card details'
  });

  $urlRouterProvider.otherwise('/');

}

export default OnConfig;
