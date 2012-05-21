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
