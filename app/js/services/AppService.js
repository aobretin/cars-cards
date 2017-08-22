function AppService($rootScope) {
  'ngInject'

  const service = {
    data: [],
    maker: undefined,
    type: undefined,
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
