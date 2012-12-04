var DetailView = function(obj){

	this.initialize = function(){
		this.el = $('<div/>');
	};

	this.render = function(){
		this.el.html(DetailView.template(obj));
		return this;
	};

	this.initialize();
}

DetailView.template = Handlebars.compile($("#detail-tpl").html());