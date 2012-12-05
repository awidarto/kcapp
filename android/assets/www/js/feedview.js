var FeedView = function(obj){
	this.obj = obj;

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){

        this.el.html(FeedView.template(obj));

        $('.feed-list',this.el).html(FeedView.itemTemplate(obj.feeds));

        if (this.feediscroll) {
            console.log('Refresh iScroll');
            this.feediscroll.refresh();
        } else {
            console.log('New iScroll');
            this.feediscroll = new iScroll($('#feedContainer',this.el)[0], {hScrollbar: false, vScrollbar: false });
        }

        return this;
    };

    this.initialize();
}

FeedView.template = Handlebars.compile($("#feed-tpl").html());
FeedView.itemTemplate = Handlebars.compile($('#feed-li-tpl').html());