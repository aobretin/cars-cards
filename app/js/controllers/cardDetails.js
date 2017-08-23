function CardDetailsCtrl($stateParams, $state, AppService, AppSettings) {
	'ngInject'

	const CARD_ID = $stateParams.id;

	const vars = {
		card: extractCard(CARD_ID)
	}

	const methods = {
		
	}

	// Here normally we would use a get with a query param but we will use a moch method
	function extractCard(id) {
		let foundCard = null;
		let cards = AppService.data.length ? AppService.data : AppSettings.CARDS_JSON_MOCK; // if we would have a real DB this would be available with a req with id param

		cards.some(function(card) {
			if (card.id == id) return foundCard = card;
		});

		return checkIfNeedToRedirect(foundCard);
	}

	function checkIfNeedToRedirect(foundCard) {
		return foundCard === null ? $state.go('List') : foundCard;
	}

	console.log(vars.card);

	this.vars = vars;
	this.methods = methods;
}

export default {
  name: 'CardDetailsCtrl',
  fn: CardDetailsCtrl
};
