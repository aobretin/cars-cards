function AddCardCtrl($state, AppService) {
	'ngInject'

	const VALUES_ORIGINAL = {
		maker: {
			REGEX: /^[a-zA-Z]*$/,
			value: ''
		},
		type: {
			REGEX: '',
			value: ''
		},
		description: {
			REGEX: '',
			value: ''
		}
	}

	const vars = {
		formData: angular.copy(VALUES_ORIGINAL)
	}

	const methods = {
		cancelAdd: function() {
			$state.go('List');
		},
		addNewCard: function() {
			// here we should create a post with ApiService.post
			let data = AppService.data.slice();

			// we add a dummy card
			data.unshift(
				{
					"id": data.length + 1, // so we can always have a unique id
					"url": '',
					"maker": vars.formData.maker.value,
					"type": vars.formData.maker.type,
					"description": vars.formData.maker.description
				}
			)

			AppService.updateData('data', data);
			AppService.updateData('doneLoading', false);
			$state.go('List');
		}
	}

	this.vars = vars;
	this.methods = methods;
}

export default {
  name: 'AddCardCtrl',
  fn: AddCardCtrl
};
