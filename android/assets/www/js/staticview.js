var StaticView = function(obj){
	this.article = obj;

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
        this.el.html(StaticView.template(this.article));
        return this;
    };

    this.initialize();
}

StaticView.template = Handlebars.compile($("#static-tpl").html());