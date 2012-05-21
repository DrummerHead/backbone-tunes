(function($) {





window.Album = Backbone.Model.extend({});

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






})(jQuery);
