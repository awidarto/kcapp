var LawnStorageStore = function(successCallback, errorCallback){

    this.initialize = function(){
        var self = this;

        this.store = Lawnchair('kcStore', function(result){
            //console.log(result);
        });

        //this.store.nuke();

                
        this.store.all(function(recs){
            var self = this;
            if(recs.length === 0){
                console.log('populate empty db');
                self.populate();
            }
        });
        
    }


    this.dbreset = function(){
        var self = this;
        this.store.nuke(function(res){
            console.log('re-populate empty db');
            self.populate();
        });
    }

    this.findByName = function(searchKey, callback) {

        this.store.all(function(employees){

            var results = employees.filter(function(element) {
                var fullName = element.value.firstName + " " + element.value.lastName;
                return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
            });

            var ret = [];

            for(var i=0;i<results.length;i++){
                ret.push(results[i].value);
            }

            callback(ret);
        });
    }

    this.findById = function(id, callback) {
        self.employee = null;
        this.store.all(function(employees){
            var l = employees.length;
            for (var i=0; i < l; i++) {
                if (employees[i].value.id === id) {
                    self.employee = employees[i].value;
                    break;
                }
            }
            callback(employee);
        });
    }

    this.getGameCode = function(callback){
        this.store.get('gameKey',function(result){
            callback(result.value);
        });
    }

    this.getGameState = function(callback){
        this.store.get('gameState',function(result){
            console.log(result);
            callback(result.value);
        });
    }

    this.setGameState = function(state, callback){
        this.store.save({key:'gameState',value:state},function(result){
            callback(result);
        });
    }

    this.getGameChoice = function(callback){
        this.store.get('gameChoice',function(result){
            callback(result.value);
        });
    }

    this.setGameChoice = function(state, callback){
        this.store.save({key:'gameChoice',value:state},function(result){
            callback(result);
        });
    }
    //-------------

    this.findShopByName = function(searchKey, callback) {

        this.store.all(function(shops){

            var results = shops.filter(function(element) {
                var shopinfo = element.value.shopname + " " + element.value.category;
                return (shopinfo.toLowerCase().indexOf(searchKey.toLowerCase()) > -1 && element.value.t == "dir");
            });

            var ret = [];

            for(var i=0;i<results.length;i++){
                ret.push(results[i].value);
            }

            callback(ret);
        });

    }

    this.findAllShops = function(callback){
        this.store.all(function(shops){

            var results = shops.filter(function(element) {
                return (element.value.t == "dir");
            });

            var ret = [];

            for(var i=0;i<results.length;i++){
                ret.push(results[i].value);
            }

            callback(ret);
        });
    }

    this.findAll = function(callback){
        this.store.all(function(shops){

            for(var i=0;i<shops.length;i++){
                ret.push(shops[i].value);
            }

            callback(ret);
        });
    }


    this.findStaticBySlug = function(slug, callback) {

        this.store.all(function(shops){

            var article = null;

            var articles = shops.filter(function(element) {
                return (element.value.t === "static" && element.value.id === id);
            });

            for (var i=0; i < articles.length; i++) {
                if (articles[i].value.slug === slug) {
                    article = statics[i].value;
                    break;
                }
            }
            callback(article);
        });

    }


    this.findArticleById = function(id, callback) {
        this.store.all(function(shops){

            var article = null;

            var articles = shops.filter(function(element) {
                return (element.value.t === "art" && element.value.id === id);
            });

            for (var i=0; i < articles.length; i++) {
                if (articles[i].value.id === id) {
                    article = articles[i].value;
                    break;
                }
            }
            callback(article);
        });
    }

    this.findArticleBySection = function(section, callback) {
        this.store.all(function(shops){
            var results = shops.filter(function(element) {
                return (element.value.t === "art" && element.value.section === section);
            });
            var ret = [];
            
            for(var i=0;i<results.length;i++){
                ret.push(results[i].value);
            }

            callback(ret);
        });
    }

    //-------------------


    this.populate = function(){
        var self = this;
        requirejs(['js/storage/data-defaults.js'],function(d){
            //console.log(dataDefaults);
            var directoryDefaults = dataDefaults;
            for(i = 0; i < directoryDefaults.length; i++){
                self.store.save({key: i + 1, value: directoryDefaults[i]}, function(obj){
                    console.log(obj);
                });     
            }       
        });

        console.log(this.directoryDefaults);
        // directory
        // preferences
        for(i = 0; i < this.prefDefaults.length; i++){
            this.store.save(this.prefDefaults[i], function(obj){
                console.log(obj);
            });     
        }       

    }

    //default values

    this.prefDefaults = [
        {key:"isGame", value:"false"},
        {key:"gameState", value:"main"},
        {key:"gameChoice", value:"none"},
        {key:"gameKey", value:"123456789"},
        {key:"gameStep", value:"none"},

        {key:"gameTsearch1", value:{"code":"123456789","match":"false","clue":"logo1.jpg","cluetext":"clue text"}},
        {key:"gameTsearch2", value:{"code":"123456789","match":"false","clue":"logo2.jpg","cluetext":"clue text"}},
        {key:"gameTsearch3", value:{"code":"123456789","match":"false","clue":"logo3.jpg","cluetext":"clue text"}},
        {key:"gameTsearch4", value:{"code":"123456789","match":"false","clue":"logo4.jpg","cluetext":"clue text"}},
        {key:"gameTsearch5", value:{"code":"123456789","match":"false","clue":"logo5.jpg","cluetext":"clue text"}},

        {key:"gameLogo1", value:{"code":"123456789","match":"false","clue":"logo1.jpg","cluetext":"clue text"}},
        {key:"gameLogo2", value:{"code":"123456789","match":"false","clue":"logo2.jpg","cluetext":"clue text"}},
        {key:"gameLogo3", value:{"code":"123456789","match":"false","clue":"logo3.jpg","cluetext":"clue text"}},
        {key:"gameLogo4", value:{"code":"123456789","match":"false","clue":"logo4.jpg","cluetext":"clue text"}},
        {key:"gameLogo5", value:{"code":"123456789","match":"false","clue":"logo5.jpg","cluetext":"clue text"}}
    ];



    this.initialize();
        // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    callLater(successCallback);

}