var GamesView = function(page, store){
	this.page = page;
    this.store = store;

    this.initialize = function(){
        this.el = $('<div/>');
        this.el.on('click','#gamesvalidate',this.validateGame);
    };

    this.validateGame = function(){
        var valid = $('#gamesvalidator').val();

        app.store.getGameCode(function(code){
            if(code === valid){
                alert('Valid Code, have a Good Game');
                app.store.setGameState('choice',function(result){
                    console.log(result);
                });
                app.slidePage(new GamesView("choice", app.store).render());
            }else{
                alert('Invalid Code, Too Bad');
            }         
        });
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