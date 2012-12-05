var ShopView = function(obj){
	this.article = obj;

	this.article.u = encodeURIComponent('http://kuningancity.com/downloads');
	this.article.t = encodeURIComponent('KuninganCity Mobile Apps');
	this.article.i = encodeURIComponent('noimage');
	this.article.d = encodeURIComponent('I m using Kuningan City mobile app to win a million dollar');

	this.article.tweet = encodeURIComponent('I m using Kuningan City mobile app to win a million dollar');

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
        this.el.html(ShopView.template(this.article));
        return this;
    };

    this.initialize();
}

ShopView.template = Handlebars.compile($("#shop-tpl").html());