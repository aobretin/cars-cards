function ApiService($http) {
  'ngInject';

  const service = {
    get: function(data) {
      return new Promise(function(resolve, reject) {
        resolve(data);
        reject(err, status);
      });
    }
  };
  
  return service;
}

export default {
  name: 'ApiService',
  fn: ApiService
};
