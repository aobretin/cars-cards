function ListCardCtrl($timeout, AppService) {
	'ngInject'

	const vars = {
		
	}

	const methods = {
		deleteCard: function(item) {
			// here we would have a nice ApiService.delete but we will mock again

			var confirm = window.confirm('Are you sure you want to delete this item ?');

			if (confirm) {
				let data = AppService.data.slice();
				data.splice(data.indexOf(item), 1);

				AppService.updateData('data', data);
				AppService.updateData('doneLoading', false);

				$timeout(function() {
					AppService.updateData('doneLoading', true); // mock a longer request
				}, 1000);
			}
		}
	}

	this.vars = vars;
	this.methods = methods;
}

export default {
  name: 'ListCardCtrl',
  fn: ListCardCtrl
};
