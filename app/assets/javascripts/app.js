console.log('app.js loaded');

var token = $('#api-token').val();
$.ajaxSetup({
  headers:{
    "accept": "application/json",
    "token": token
  }
});

// Model
var Connection = Backbone.Model.extend({});

// Collection
var ConnectionCollection = Backbone.Collection.extend({
  model: Connection,
  url: '/api/connections',
  comparator: function(connection) {
      return +new Date(connection.get('created_at'));
    }
});

// Views
var ConnectionView = Backbone.View.extend({
  tagName: 'div',
  className: 'connection',
  template: _.template( $('#connection-template').html() ),
  render: function(){
    this.$el.empty();
    var html = this.template( this.model.toJSON() );
    var $html = $( html );
    this.$el.append( $html );
  },
  events:{
    'click button.remove': 'removeConnection'
  },
  removeConnection: function(){
    this.model.destroy();
    this.$el.remove();
  }

});

var ConnectionListView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, 'add', this.render);
  },
  render: function(){
    this.$el.empty();
    var connections = this.collection.models;
    var view;
    for (var i = 0; i < connections.length; i++) {
      view = new ConnectionView({model: connections[i]});
      view.render();
      this.$el.append( view.$el );
    }
  }
});


var connections = new ConnectionCollection();
var connectionPainter = new ConnectionListView({
  collection: connections,
  el: $('#connection-list')
});
connections.fetch();


$('form.create-connection').on('submit', function(e){
  e.preventDefault();
  var newMessage = $(this).find("#message").val();
  var trainLine = $(this).find("#train").val();
  var trainDirection = $(this).find("#direction").val();
  var trainStation = $(this).find("#station").val();
  connections.create({message: newMessage, direction: trainDirection, station: trainStation, train: trainLine});
});
