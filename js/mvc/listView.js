var ListView = function(model) {
  this.model = model;
  this.addNameEvent = new Event(this);
  this.selectNameEvent = new Event(this);
  this.unselectNameEvent = new Event(this);
  this.deleteNameEvent = new Event(this);

  this.init();
};

ListView.prototype = {

  init: function() {
    this.createChildren().setupHandlers().enable();
    this.show();
  },

  createChildren: function() {
    // cache the document object
    this.$container = $('.js-container');
    this.$addNameButton = this.$container.find('.js-add-name-button');
    this.$nameTextBox = this.$container.find('.js-name-textbox');
    this.$namesContainer = this.$container.find('.js-names-container');

    return this;
  },

  setupHandlers: function() {

    this.addNameButtonHandler = this.addNameButton.bind(this);
    this.selectOrUnselectNameHandler = this.selectOrUnselectName.bind(this);
    this.deleteNameButtonHandler = this.deleteNameButton.bind(this);

    /**
        Handlers from Event Dispatcher
        */
    this.addNameHandler = this.addName.bind(this);
    this.clearNameTextBoxHandler = this.clearNameTextBox.bind(this);
    this.deleteNamesHandler = this.deleteNames.bind(this);

    return this;
  },

  enable: function() {

    this.$addNameButton.click(this.addNameButtonHandler);
    this.$container.on('click', '.js-name', this.selectOrUnselectNameHandler);
    this.$container.on('click', '.js-delete-name-button', this.deleteNameButtonHandler);

    /**
         * Event Dispatcher
         */
    this.model.addNameEvent.attach(this.addNameHandler);
    this.model.addNameEvent.attach(this.clearNameTextBoxHandler);
    this.model.deleteNamesEvent.attach(this.deleteNamesHandler);

    return this;
  },

  addNameButton: function() {
    this.addNameEvent.notify({name: this.$nameTextBox.val()});
  },

  deleteNameButton: function() {
    this.deleteNameEvent.notify();
  },

  selectOrUnselectName: function() {

    var nameIndex = $(event.target).attr("data-index");

    if ($(event.target).attr('data-name-selected') == 'false') {
      $(event.target).attr('data-name-selected', true);
      this.selectNameEvent.notify({nameIndex: nameIndex});
    } else {
      $(event.target).attr('data-name-selected', false);
      this.unselectNameEvent.notify({nameIndex: nameIndex});
    }

  },

  show: function() {
    this.buildList();
  },

  buildList: function() {
    var names = this.model.getNames();
    var counts = this.model.getCounts();
    var html = "";
    var $namesContainer = this.$namesContainer;

    $namesContainer.html('');

    var index = 0;
    for (var name in names) {

      $namesContainer.append(html + "<div><label><input type='checkbox' class='js-name' data-index='" + counts[index] + "' data-name-selected='false'>" + names[name] + "</label></div>");
      index++;
    }

  },

  /* -------------------- Handlers From Event Dispatcher ----------------- */

  clearNameTextBox: function() {
    this.$nameTextBox.val('');
  },

  addName: function() {
    this.show();
  },

  deleteNames: function() {
    this.show();

  },

  /* -------------------- End Handlers From Event Dispatcher ----------------- */

};
