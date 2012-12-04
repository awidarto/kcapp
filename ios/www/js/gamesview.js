var GamesView = function(page){
	this.page = page;

    this.initialize = function(){
        this.el = $('<div/>');
    };

    this.render = function(){
    	if(this.page === 'main'){
	        this.el.html(GamesView.games());
    	}
    	if(this.page === 'choice'){
	        this.el.html(GamesView.gameschoice());
    	}
    	if(this.page === 'tsearch'){
	        this.el.html(GamesView.gamestsearch());
    	}
    	if(this.page === 'logo'){
	        this.el.html(GamesView.gameslogo());
    	}
        return this;
    };

    this.initialize();
}

GamesView.games = Handlebars.compile($("#games-tpl").html());
GamesView.gameschoice = Handlebars.compile($("#games-choice-tpl").html());
GamesView.gamestsearch = Handlebars.compile($("#games-tsearch-tpl").html());
GamesView.gameslogo = Handlebars.compile($("#games-logo-tpl").html());