(function($) {




window.Album = Backbone.Model.extend({
  isFirstTrack : function(index){
    return index == 0;
  },
  isLastTrack : function(index){
    return index >= this.get('tracks').length - 1;
  },
  trackUrlAtIndex : function(index){
    if(this.get('tracks').length >= index){
      return this.get('tracks')[index].url;
    }
    return null;
  }

});


window.Albums = Backbone.Collection.extend({
  model: Album,
  url : '/albums'
});


window.AlbumView = Backbone.View.extend({

  tagName : 'li',
  className : 'album',

  initialize : function(){
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.template = _.template($('#album-template').html());
  },

  render : function(){
    var renderContent = this.template(this.model.toJSON());
    $(this.el).html(renderContent);
    return this;
  }
});


window.LibraryAlbumView = AlbumView.extend({
});

window.LibraryView = Backbone.View.extend({
  tagName : 'section',
  className : 'library',

  initialize : function(){
    _.bindAll(this, 'render');
    this.template = _.template($('#library-template').html());
    this.collection.bind('reset', this.render);
  },

  render : function(){
    var $albums
      , collection = this.collection

    $(this.el).html(this.template({}));
    $albums = this.$('.albums');
    collection.each(function(album){
      var view = new LibraryAlbumView({
        model : album,
        collection : collection
      })
      $albums.append(view.render().el);
    });
    return this
  }
});






})(jQuery);
