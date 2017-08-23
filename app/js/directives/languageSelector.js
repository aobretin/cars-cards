function LanguageSelectorDirective() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'directives/language-selector.html',
    controller: 'LanguageSelectorCtrl as language',
    scope: {}
  };
}

export default {
  name: 'languageSelectorDirective',
  fn: LanguageSelectorDirective
};
