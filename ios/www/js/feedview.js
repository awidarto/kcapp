var FeedView = function(obj){
	this.feeds = obj;

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
        this.el.html(FeedView.template(this.feeds));
        return this;
    };

    this.initialize();
}

FeedView.template = Handlebars.compile($("#feed-tpl").html());