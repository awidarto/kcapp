var ArticleView = function(obj){
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
        this.el.html(ArticleView.template(this.article));
        return this;
    };

    this.shareSocial = function(){
    	window.plugins.SendSms.social({message:'Share this link'},
	    	function(msg) {
 
	    	},
	    	function(fail) {
 
	    	}
	    ); 
    }

    this.initialize();
}

ArticleView.template = Handlebars.compile($("#article-tpl").html());