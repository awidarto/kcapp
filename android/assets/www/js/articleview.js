var ArticleView = function(obj){
	this.article = obj;

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
        this.el.html(ArticleView.template(this.article));
        return this;
    };

    this.initialize();
}

ArticleView.template = Handlebars.compile($("#article-tpl").html());