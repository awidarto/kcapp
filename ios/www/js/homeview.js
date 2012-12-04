var HomeView = function(store){
	this.store = store;

	this.initialize = function(){
		this.el = $('<div/>');
		this.el.on('keyup','.search-key',this.findByName);
	};
	
	this.findByName = function() {
        store.findByName($('.search-key').val(), function(employees) {
        	$('.employee-list').html(HomeView.itemTemplate(employees));
        });
    };    

    this.findAll = function() {
        this.store.findAll(function(employees) {
            $('.employee-list').html(HomeView.itemTemplate(employees));
        });
    };    

    this.render = function() {
        this.el.html(HomeView.template());
        this.findAll();
        return this;
    };

	this.initialize();
}

HomeView.template = Handlebars.compile($('#home-tpl').html());
HomeView.itemTemplate = Handlebars.compile($('#home-li-tpl').html());