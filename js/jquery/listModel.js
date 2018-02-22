var ListModel = function() {
  this.names = [];
  this.counts = [];
  this.selectedNames = [];
  this.addNameEvent = new Event(this);
  this.removeNameEvent = new Event(this);
  this.deleteNamesEvent = new Event(this);

};

ListModel.prototype = {

  addName: function(name) {
    // this.names.push({
    //     nameName: name,
    // });

    if (!localStorage.count) {
      localStorage.setItem("count", 0);
    } else {
      var countp = localStorage.getItem("count");
      countp++;
      localStorage.setItem("count", countp);
    }
    var count = localStorage.getItem("count");
    localStorage.setItem("nameName" + count.toString(), name);
    this.addNameEvent.notify();
  },

  getNames: function() {
    this.names = [];
    this.counts = [];
    for (var i = 0; i <= localStorage.count; i++) {
      if (localStorage.getItem("nameName" + i.toString()) != null) {
        this.names.push(localStorage.getItem("nameName" + i.toString()));
        this.counts.push(i.toString());
      }
    };

    return this.names;
  },

  getCounts: function() {
    return this.counts;
  },

  setSelectedName: function(nameIndex) {
    this.selectedNames.push(nameIndex);
  },

  unselectName: function(nameIndex) {
    this.selectedNames.splice(nameIndex, 1);
  },

  deleteNames: function() {
    var selectedNames = this.selectedNames.sort();

    for (var i = selectedNames.length - 1; i >= 0; i--) {
      // this.names.splice(this.selectedNames[i], 1);

      localStorage.removeItem("nameName" + this.selectedNames[i]);
    }

    // clear the selected names
    this.selectedNames = [];

    this.deleteNamesEvent.notify();

  }

};
