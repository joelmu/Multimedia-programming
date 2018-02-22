$(function() {
  var model = new ListModel(),
    view = new ListView(model),
    controller = new ListController(model, view);
});
