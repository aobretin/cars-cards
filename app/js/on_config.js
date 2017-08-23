import translations from './translations';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $compileProvider, $translateProvider) {
  'ngInject';

  const DEFAULT_LANG = 'en';

  if (process.env.NODE_ENV === 'production') {
    $compileProvider.debugInfoEnabled(false);
  }

  // we register dynamically all the languages available in translation.js

  Object.keys(translations).forEach(function(language) {
    $translateProvider.translations(language, translations[language]);
  });

  $translateProvider.registerAvailableLanguageKeys(Object.keys(translations));

  $translateProvider.preferredLanguage(DEFAULT_LANG).fallbackLanguage(DEFAULT_LANG);

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
