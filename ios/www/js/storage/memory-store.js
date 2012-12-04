var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findShopByName = function(searchKey, callback) {
        var shops = this.directory.filter(function(element) {
            var shopinfo = element.shopname + " " + element.category;
            return shopinfo.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, shops);
    }

    this.findAllShops = function(callback){
        var shops = this.directory;
        callLater(callback, shops);
    }

    this.findAll = function(callback){
        var employees = this.employees;
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    this.findStaticBySlug = function(slug, callback) {
        var statics = this.statics;
        var article = null;
        var l = statics.length;
        for (var i=0; i < l; i++) {
            if (statics[i].slug === slug) {
                article = statics[i];
                break;
            }
        }
        callLater(callback, article);
    }


    this.findArticleById = function(id, callback) {
        var articles = this.articles;
        var article = null;
        var l = articles.length;
        for (var i=0; i < l; i++) {
            if (articles[i].id === id) {
                article = articles[i];
                break;
            }
        }
        callLater(callback, article);
    }

    this.findArticleBySection = function(section, callback) {
        var art = this.articles;
        var article = [];
        var l = art.length;
        for (var i=0; i < l; i++) {
            if (art[i].section === section) {
                article.push(art[i]);
            }
        }
        callLater(callback, article);
    }


    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.articles = [
        {
            "id":1,
            "title":"Burger Blenger Coming",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"whatson",
            "is_head": 1
        },
        {
            "id":2,
            "title":"Burger Blenger Coming",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"whatson",
            "is_head": 0
        },
        {
            "id":3,
            "title":"Burger Blenger Coming",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"whatson",
            "is_head": 0
        },
        {
            "id":4,
            "title":"Burger Blenger Coming",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"whatson",
            "is_head": 0
        },
        {
            "id":5,
            "title":"Burger Blenger Coming",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"whatson",
            "is_head": 0
        },
        {
            "id":6,
            "title":"Beli Burger Dapat Steak",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"promo",
            "is_head": 1
        },
        {
            "id":7,
            "title":"Ke Singapura Hanya IDR 888 !!",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"promo",
            "is_head": 0
        },
        {
            "id":8,
            "title":"Mau Kemana Liburan Ini ?",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"promo",
            "is_head": 0
        },
        {
            "id":9,
            "title":"Burger Blenger Coming",
            "short":"27 November 2012 - 31 November 2012",
            "body":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam",
            "section":"promo",
            "is_head": 0
        }

    ];

    this.directory = [
            {"id":1, "shopname":"Gramedia",     "phone":"212-999-8887", "category": "books","floor":"GF", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Zara",         "phone":"212-999-8887", "category": "fashion","floor":"GF", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Sogo",         "phone":"212-999-8887", "category": "general","floor":"LGF", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Food Hall",    "phone":"212-999-8887", "category": "general","floor":"2F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Pizza Hut",    "phone":"212-999-8887", "category": "food","floor":"2F", "location":"N12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"JolliBee",     "phone":"212-999-8887", "category": "food","floor":"2F", "location":"B16", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"JCo Donut",    "phone":"212-999-8887", "category": "food","floor":"1F", "location":"B17", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Next",         "phone":"212-999-8887", "category": "fashion","floor":"1F", "location":"B18", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Duck King",    "phone":"212-999-8887", "category": "food","floor":"1F", "location":"C12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Starbuck",     "phone":"212-999-8887", "category": "food","floor":"1F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Studio XXI",   "phone":"212-999-8887", "category": "entertainment","floor":"1F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Ace Hardware", "phone":"212-999-8887", "category": "home","floor":"1F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Informa",      "phone":"212-999-8887", "category": "home","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Toys City",    "phone":"212-999-8887", "category": "kids","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Erafone",      "phone":"212-999-8887", "category": "telecom","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"OkeShop",      "phone":"212-999-8887", "category": "telecom","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Infinity",     "phone":"212-999-8887", "category": "computer","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Telkomsel",    "phone":"212-999-8887", "category": "telecom","floor":"3F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Borders",      "phone":"212-999-8887", "category": "books","floor":"4F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
            {"id":1, "shopname":"Kinokuniya",   "phone":"212-999-8887", "category": "books","floor":"4F", "location":"B12", "description":"Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio"},
        ];


    this.employees = [
            {"id": 1, "firstName": "Ryan", "lastName": "Howard", "title":"Vice President, North East", "managerId": 0, "city":"New York, NY", "cellPhone":"212-999-8888", "officePhone":"212-999-8887", "email":"ryan@dundermifflin.com"},
            {"id": 2, "firstName": "Michael", "lastName": "Scott", "title":"Regional Manager", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-865-2536", "officePhone":"570-123-4567", "email":"michael@dundermifflin.com"},
            {"id": 3, "firstName": "Dwight", "lastName": "Schrute", "title":"Assistant Regional Manager", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-865-1158", "officePhone":"570-843-8963", "email":"dwight@dundermifflin.com"},
            {"id": 4, "firstName": "Jim", "lastName": "Halpert", "title":"Assistant Regional Manager", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-865-8989", "officePhone":"570-968-5741", "email":"dwight@dundermifflin.com"},
            {"id": 5, "firstName": "Pamela", "lastName": "Beesly", "title":"Receptionist", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-999-5555", "officePhone":"570-999-7474", "email":"pam@dundermifflin.com"},
            {"id": 6, "firstName": "Angela", "lastName": "Martin", "title":"Senior Accountant", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-555-9696", "officePhone":"570-999-3232", "email":"angela@dundermifflin.com"},
            {"id": 7, "firstName": "Kevin", "lastName": "Malone", "title":"Accountant", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com"},
            {"id": 8, "firstName": "Oscar", "lastName": "Martinez", "title":"Accountant", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-321-9999", "officePhone":"570-585-3333", "email":"oscar@dundermifflin.com"},
            {"id": 9, "firstName": "Creed", "lastName": "Bratton", "title":"Quality Assurance", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-222-6666", "officePhone":"570-333-8585", "email":"creed@dundermifflin.com"},
            {"id": 10, "firstName": "Andy", "lastName": "Bernard", "title":"Sales Director", "managerId": 4, "city":"Scranton, PA", "cellPhone":"570-555-0000", "officePhone":"570-646-9999", "email":"andy@dundermifflin.com"},
            {"id": 11, "firstName": "Phyllis", "lastName": "Lapin", "title":"Sales Representative", "managerId": 10, "city":"Scranton, PA", "cellPhone":"570-241-8585", "officePhone":"570-632-1919", "email":"phyllis@dundermifflin.com"},
            {"id": 12, "firstName": "Stanley", "lastName": "Hudson", "title":"Sales Representative", "managerId": 10, "city":"Scranton, PA", "cellPhone":"570-700-6464", "officePhone":"570-787-9393", "email":"shudson@dundermifflin.com"},
            {"id": 13, "firstName": "Meredith", "lastName": "Palmer", "title":"Supplier Relations", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-588-6567", "officePhone":"570-981-6167", "email":"meredith@dundermifflin.com"},
            {"id": 14, "firstName": "Kelly", "lastName": "Kapoor", "title":"Customer Service Rep.", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-123-9654", "officePhone":"570-125-3666", "email":"kelly@dundermifflin.com"},
            {"id": 15, "firstName": "Toby", "lastName": "Flenderson", "title":"Human Resources", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"}
        ];

    this.statics = [
            {
                title: "About Kuningan City",
                slug: "about",
                body: "<p>body copy</p>"
            }
        ];

    callLater(successCallback);

}