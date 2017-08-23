function ListCtrl($rootScope, $timeout, ApiService, AppService, AppSettings) {
	'ngInject'

	// original data can be found in constants.js

	const vars = {
		data: AppService.data,
		maker: AppService.maker,
		type: AppService.type,
		doneLoading: AppService.doneLoading
	}

	const methods = {

	}

	// we init the list and will be using this method later to refresh the list
	function initList() {
		// so that the list does not reuse the constant
		if (vars.data.length === 0) {
			// mock the request with a promise
			ApiService.get(AppSettings.CARDS_JSON_MOCK).then(function(res) {
				AppService.updateData('data', res);

				$timeout(function() {
					AppService.updateData('doneLoading', true); // mock a longer request
				}, 1000);
			})
		} else {
			$timeout(function() {
				AppService.updateData('doneLoading', true); // mock a longer request
			}, 1000);
		}
	}

	$rootScope.$on('APP_SERVICE_UPDATED', function(e, service) {
		vars.maker = service.maker;
		vars.type = service.type;
		vars.data = service.data;
		vars.doneLoading = service.doneLoading;
	});

	initList();

	this.vars = vars;
	this.methods = methods;
}

export default {
  name: 'ListCtrl',
  fn: ListCtrl
};
