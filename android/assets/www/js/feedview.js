var FeedView = function(obj){
	this.feeds = obj;

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
        this.el.html(FeedView.template(this.feeds));
            if (self.iscroll) {
                console.log('Refresh iScroll');
                self.iscroll.refresh();
            } else {
                console.log('New iScroll');
                self.iscroll = new iScroll($('.scroller', this.el)[0], {hScrollbar: false, vScrollbar: false });
            }
        return this;
    };

    this.initialize();
}

FeedView.template = Handlebars.compile($("#feed-tpl").html());