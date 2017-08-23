function ApiService($http) {
  'ngInject';

  // this would normally hold the get post delete patch methods but for this app we will use 
  // a mock Promise that return the data

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
