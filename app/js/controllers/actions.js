function ActionsCtrl($state, AppService,) {
	'ngInject'

	const vars = {
		filters: {
			maker: buildMakerFilter()
		}
	}

	const methods = {
		addNewCard: function() {
			$state.go('AddCard');
		},
		updateMakerFilter: function(maker) {
			AppService.updateData('maker', maker);
		},
		updateTypeFilter: function(type) {
			AppService.updateData('type', type);
		}
	}

	function buildMakerFilter() {
		let data = [];

		AppService.data.forEach(function(el) {
			if (data.indexOf(el.maker) == -1) data.push(el.maker);
		});

		return data;
	}

	this.vars = vars;
	this.methods = methods;
}

export default {
  name: 'ActionsCtrl',
  fn: ActionsCtrl
};
