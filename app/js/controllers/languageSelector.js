function LanguageSelectorCtrl($translate) {
	'ngInject'

	const AVAILABLE_LANGUAGES = $translate.getAvailableLanguageKeys();

	const vars = {
		languages: AVAILABLE_LANGUAGES,
		selectedLanguage: AVAILABLE_LANGUAGES[0]
	}

	const methods = {
		changeLanguage: function(lang) {
			$translate.use(lang);
		}
	}

	this.vars = vars;
	this.methods = methods;
}

export default {
  name: 'LanguageSelectorCtrl',
  fn: LanguageSelectorCtrl
};
