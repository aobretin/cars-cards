function ListCardDirective() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'directives/list-card.html',
    controller: 'ListCardCtrl as card',
    scope: {
      item: '='
    }
  };
}

export default {
  name: 'listCardDirective',
  fn: ListCardDirective
};
