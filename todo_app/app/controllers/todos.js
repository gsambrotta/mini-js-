var Todos = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;

    geddy.model.Todo.all(function(err, todos) {
      self.respond({params: params, todos: todos});
    });
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

  this.create = function (req, resp, params) {
    var self = this
      , todo = geddy.model.Todo.create(params);

    if (!todo.isValid()) {
      this.flash.error(todo.errors);
      this.redirect({action: 'add'});
    }
    else {
      todo.save(function(err, data) {
        if (err) {
          self.flash.error(err);
          self.redirect({action: 'add'});
        }
        else {
          self.redirect({controller: self.name});
        }
      });
    }
  };

  this.show = function (req, resp, params) {
    var self = this;

    geddy.model.Todo.first(params.id, function(err, todo) {
      if (!todo) {
        var err = new Error();
        err.statusCode = 404;
        self.error(err);
      }
      else {
        self.respond({params: params, todo: todo.toObj()});
      }
    });
  };

  this.edit = function (req, resp, params) {
    var self = this;

    geddy.model.Todo.first(params.id, function(err, todo) {
      if (!todo) {
        var err = new Error();
        err.statusCode = 400;
        self.error(err);
      }
      else {
        self.respond({params: params, todo: todo});
      }
    });
  };

  this.update = function (req, resp, params) {
    var self = this;

    geddy.model.Todo.first(params.id, function(err, todo) {
      todo.updateProperties(params);
      if (!todo.isValid()) {
        this.flash.error(todo.errors);
        this.redirect({action: 'edit'});
      }
      else {
        todo.save(function(err, data) {
          if (err) {
            self.flash.error(err);
            self.redirect({action: 'edit'});
          }
          else {
            self.redirect({controller: self.name});
          }
        });
      }
    });
  };

  this.destroy = function (req, resp, params) {
    var self = this;

    geddy.model.Todo.remove(params.id, function(err) {
      if (err) {
        self.flash.error(err);
        self.redirect({action: 'edit'});
      }
      else {
        self.redirect({controller: self.name});
      }
    });
  };

};

exports.Todos = Todos;
