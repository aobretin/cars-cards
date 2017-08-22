function ListCardDirective() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'directives/list-card.html',
    scope: {
      url: '=',
      maker: '=',
      type: '=',
      description: '='
    }
  };
}

export default {
  name: 'listCardDirective',
  fn: ListCardDirective
};
