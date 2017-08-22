function ActionsDirective() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: 'directives/actions.html',
    controller: 'ActionsCtrl as actions',
    scope: {}
  };
}

export default {
  name: 'actionsDirective',
  fn: ActionsDirective
};
