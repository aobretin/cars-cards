function AppService($rootScope) {
  'ngInject'

  // we are going to use a service to keep the state of the data and state of the app and
  // notify where needed about changes

  const service = {
    data: [],
    maker: undefined,
    type: undefined,
    doneLoading: false,
    
    updateData: function(key, value) {
      service[key] = value;

      let broadcast = $rootScope.$broadcast('APP_SERVICE_UPDATED', service);

      $rootScope.$on('$destroy', broadcast);
    }
  };
  
  return service;
}

export default {
  name: 'AppService',
  fn: AppService
};
