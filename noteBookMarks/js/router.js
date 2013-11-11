Notes.Router.map(function () {
  /*this is a route and not a resource its 
  the top level index. A index is present at each nested level
  of which you do not have to define persay*/
  this.resource('index', { path: '/' }, function(){
    this.resource('new', { path: '/' });
    this.resource('note', { path: ':note_id' });
  })
});

Notes.IndexRoute = Ember.Route.extend({ 
    model: function (){             
        return this.store.find('note'); 
    }
});

Notes.NewRoute = Ember.Route.extend({ 
    model: function (){             
        return this.store.find('note'); 
    }
});


Notes.NotesRoute = Ember.Route.extend({ 
    model: function (){             
        return this.store.find('note'); 
    }
});