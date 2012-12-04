var MainView = function(){

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
        this.el.html(MainView.template());
        return this;
    };

    this.initialize();
}

MainView.template = Handlebars.compile($("#main-tpl").html());