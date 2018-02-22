var ListController = function (model, view) {
    this.model = model;
    this.view = view;

    this.init();
};

ListController.prototype = {

    init: function () {
        this.createChildren()
            .setupHandlers()
            .enable();
    },

    createChildren: function () {
        // no need to create children inside the controller
        // this is a job for the view
        // you could all as well leave this function out
        return this;
    },

    setupHandlers: function () {

        this.addNameHandler = this.addName.bind(this);
        this.selectNameHandler = this.selectName.bind(this);
        this.unselectNameHandler = this.unselectName.bind(this);
        this.deleteNameHandler = this.deleteName.bind(this);
        return this;
    },

    enable: function () {

        this.view.addNameEvent.attach(this.addNameHandler);
        this.view.deleteNameEvent.attach(this.deleteNameHandler);
        this.view.selectNameEvent.attach(this.selectNameHandler);
        this.view.unselectNameEvent.attach(this.unselectNameHandler);

        return this;
    },


    addName: function (sender, args) {
        this.model.addName(args.name);
    },

    selectName: function (sender, args) {
        this.model.setSelectedName(args.nameIndex);
    },

    unselectName: function (sender, args) {
        this.model.unselectName(args.nameIndex);
    },

    deleteName: function () {
        this.model.deleteNames();
    }

};
