var DirectoryView = function(store){
	this.store = store;

	this.initialize = function(){
		this.el = $('<div/>');
		this.el.on('keyup','.search-key',this.findShopByName);
	};
	
	this.findShopByName = function() {
        store.findShopByName($('.search-key').val(), function(shops) {
        	$('.shop-list').html(DirectoryView.itemTemplate(shops));
        });
    };    

    this.findAllShops = function() {
        this.store.findAllShops(function(shops) {
            console.log(shops);
            $('.shop-list').html(DirectoryView.itemTemplate(shops));

            if (self.iscroll) {
                console.log('Refresh iScroll');
                self.iscroll.refresh();
            } else {
                console.log('New iScroll');
                self.iscroll = new iScroll($('.dirscroller', self.el)[0], {hScrollbar: false, vScrollbar: false });
            }

        });
    };    

    this.render = function() {
        this.el.html(DirectoryView.template());
        this.findAllShops();
        return this;
    };

	this.initialize();
}

DirectoryView.template = Handlebars.compile($('#dir-tpl').html());
DirectoryView.itemTemplate = Handlebars.compile($('#dir-li-tpl').html());