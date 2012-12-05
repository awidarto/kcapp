var LawnStorageStore = function(successCallback, errorCallback){

    this.initialize = function(){
        var self = this;

        this.store = Lawnchair('kcStore', function(result){
            //console.log(result);
        });

        //this.store.nuke();

                
        this.store.all(function(recs){
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

    this.findShopById = function(id, callback) {
        this.store.all(function(shops){

            var article = null;

            var articles = shops.filter(function(element) {
                return (element.value.t === "dir" && element.value.id === id);
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



        for(i = 0; i < this.directoryDefaults.length; i++){
            this.store.save({key: i + 1, value: this.directoryDefaults[i]}, function(obj){
                console.log(obj);
            });     
        }       

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

    this.directoryDefaults = [
    
            {"id":1,  "t":"dir", "shopname":"Gramedia",     "phone":"212-999-8887", "category": "books","floor":"GF", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":2,  "t":"dir", "shopname":"Zara",         "phone":"212-999-8887", "category": "fashion","floor":"GF", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":3,  "t":"dir", "shopname":"Sogo",         "phone":"212-999-8887", "category": "general","floor":"LGF", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":4,  "t":"dir", "shopname":"Food Hall",    "phone":"212-999-8887", "category": "general","floor":"2F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":5,  "t":"dir", "shopname":"Pizza Hut",    "phone":"212-999-8887", "category": "food","floor":"2F", "location":"N12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":6,  "t":"dir", "shopname":"JolliBee",     "phone":"212-999-8887", "category": "food","floor":"2F", "location":"B16", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":7,  "t":"dir", "shopname":"JCo Donut",    "phone":"212-999-8887", "category": "food","floor":"1F", "location":"B17", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":8,  "t":"dir", "shopname":"Next",         "phone":"212-999-8887", "category": "fashion","floor":"1F", "location":"B18", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":9,  "t":"dir", "shopname":"Duck King",    "phone":"212-999-8887", "category": "food","floor":"1F", "location":"C12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":11, "t":"dir", "shopname":"Starbuck",     "phone":"212-999-8887", "category": "food","floor":"1F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":12, "t":"dir", "shopname":"Studio XXI",   "phone":"212-999-8887", "category": "entertainment","floor":"1F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":13, "t":"dir", "shopname":"Ace Hardware", "phone":"212-999-8887", "category": "home","floor":"1F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":14, "t":"dir", "shopname":"Informa",      "phone":"212-999-8887", "category": "home","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":15, "t":"dir", "shopname":"Toys City",    "phone":"212-999-8887", "category": "kids","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":16, "t":"dir", "shopname":"Erafone",      "phone":"212-999-8887", "category": "telecom","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":17, "t":"dir", "shopname":"OkeShop",      "phone":"212-999-8887", "category": "telecom","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":18, "t":"dir", "shopname":"Infinity",     "phone":"212-999-8887", "category": "computer","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":19, "t":"dir", "shopname":"Telkomsel",    "phone":"212-999-8887", "category": "telecom","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":21, "t":"dir", "shopname":"Borders",      "phone":"212-999-8887", "category": "books","floor":"4F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":22, "t":"dir", "shopname":"Kinokuniya",   "phone":"212-999-8887", "category": "books","floor":"4F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},

            {
                "id":23,
                "t":"art",
                "title":"Burger Blenger Coming",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"whatson",
                "is_head": 1
            },
            {
                "id":24,
                "t":"art",
                "title":"Burger Blenger Coming",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"whatson",
                "is_head": 0
            },
            {
                "id":25,
                "t":"art",
                "title":"Burger Blenger Coming",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"whatson",
                "is_head": 0
            },
            {
                "id":26,
                "t":"art",
                "title":"Burger Blenger Coming",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"whatson",
                "is_head": 0
            },
            {
                "id":27,
                "t":"art",
                "title":"Burger Blenger Coming",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"whatson",
                "is_head": 0
            },
            {
                "id":28,
                "t":"art",
                "title":"Beli Burger Dapat Steak",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"promo",
                "is_head": 1
            },
            {
                "id":29,
                "t":"art",
                "title":"Ke Singapura Hanya IDR 888 !!",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"promo",
                "is_head": 0
            },
            {
                "id":30,
                "t":"art",
                "title":"Mau Kemana Liburan Ini ?",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"promo",
                "is_head": 0
            },
            {
                "id":31,
                "t":"art",
                "title":"Burger Blenger Coming",
                "short":"27 November 2012 - 31 November 2012",
                "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
                "section":"promo",
                "is_head": 0
            },
            {   
                "id": 32,
                "t": "static",
                "title": "About Kuningan City",
                "slug": "about",
                "body": "<p>body copy</p>"
            }

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