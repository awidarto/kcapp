/*Jo badge/sheet demo: this is designed to show how Jo can be customized via scripts and CSS to to fit in with iOS UI conventions. This demo makes use of a tab bar for navigation, and includes a notification badge on the tab button. (c) 2012, Kevin Walzer/WordTech Communications LLC.*/


/*Start app.*/
jo.load();
/*
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
	joEvent.stop(e);
}, false);
*/
/*Customize joTabBar to take a "badge" parameter.*/
joTabBar = function() {
	joList.apply(this, arguments);
};

joTabBar.extend(joList, {
	tagName: "jotabbar",
	
	formatItem: function(data, index) {
		var o = document.createElement("jotab");
		
		if (data.type){
			o.className = data.type;			
		}

	    if (data.badge){
	        o.innerHTML = "<span class='badge'>" + data.badge + "</span>";
	    }
            
		o.setAttribute("index", index);
               	
		return o;
	}
});




/*Now we get to the demo itself.*/

var kApp = (function () {
    var scn;
    var menu;
    var stack;
    var badgeCard;
    var slideCard;
    var aboutCard;
    var active;
    var nav;
    var datastring;
    var badgetext;
    var badgebutton;
    var slidebutton;
    var closebutton;
    var mailbutton;
    var datastring;

    var container;

	var yql = new joYQL("select title from rss where url='http://davebalmer.wordpress.com/feed'");


    /*Initialize.*/
    function init() {
		return true;
    }

    /*Mail "about" data using native e-mail client. Shows how to integrate Jo with other apps on platform.*/
    function maildata(data) {
		mailstring = data.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");
		location.href = "mailto: ?&subject=Hi%20from%20Jo!&body=" + mailstring;
    }

	var yql = new joYQL("select title from rss where url='http://davebalmer.wordpress.com/feed'");

	var dirlist = new joList(yql);
	//var dirlist = new joList(yql).attach(document.body);

	dirlist.formatItem = function(data, index) {
		console.log(data.title);
		return joList.prototype.formatItem.call(this, data.title, index);
	};

	var whatlist = new joList(yql).attach(document.body);

	whatlist.formatItem = function(data, index) {
		console.log(data.title);
		return joList.prototype.formatItem.call(this, data.title, index);
	};

	var promolist = new joList(yql).attach(document.body);

	promolist.formatItem = function(data, index) {
		console.log(data.title);
		return joList.prototype.formatItem.call(this, data.title, index);
	};
      

	/*First visible card.*/
	badgeCard = new joScroller(
	    new joCard([
			new joTitle("Badge/Sheet Demo"),
			new joGroup([
			    new joLabel("<strong>Notification</strong>"),
		    	new joFlexrow(badgetext = new joInput()),
			    badgebutton = new joButton('Enter'),	
			]),
			new joDivider(),
			slidebutton = new joButton('Display Action Sheet'),
	    ])
	);
				   
	badgetext.container.placeholder='Enter badge text here';

	/*Action alert that slides up.*/
	slideCard = [
		new joTitle('Action Sheet'),
		new joHTML('E-mail a friend about Jo.'),
		new joDivider(), 
		mailbutton = new joButton('E-mail'),
		new joDivider(),	 
		closebutton = new joButton('Close Sheet'),
	];

	invalidCard = [
		new joTitle('Invalid Key'),
		new joHTML('Sorry, your key is invalid'),
		new joDivider(),	 
		closebutton = new joButton('Close'),
	];

	/*About Jo.*/
    aboutCard = new joCard([
		datastring = new joHTML('This is a demonstration of some of the customization you can do with the Jo JavaScript framework. This demo displays some iOS-style touches such as a tab bar for navigation, a notification badge on the tab icon, and an action-sheet dialog.'),
    ]).setTitle('About');

    joCache.set('about', function(){return aboutCard});

    homeCard = new joCard([
		new joGroup([
		    whatbutton = new joButton('What\'s On'),	
		    promobutton = new joButton('Promotions'),	
		    aboutbutton = new joButton('About Us')	
		])
    ]).setTitle('Home');

    joCache.set('home', function(){return homeCard});

    directoryCard = new joCard([
			new joContainer([
				new joFlexrow([
					input = new joInput("http://davebalmer.wordpress.com/feed"),
				refreshbutton = new joButton('Refresh'),
				]),
			]).setStyle({
				borderTop: "1px solid rgba(255, 255, 255, .4)",
				borderBottom: "1px solid rgba(0, 0, 0, .4)",
				padding: "10px 0 0 0",
				background: "#8990BC"
			}),
			dirlist			
    ]).setTitle('Directory');

    whatsonCard = new joCard([
			new joContainer([
				new joFlexrow([
					input = new joInput("http://davebalmer.wordpress.com/feed"),
				refreshbutton = new joButton('Refresh'),
				]),
			]).setStyle({
				borderTop: "1px solid rgba(255, 255, 255, .4)",
				borderBottom: "1px solid rgba(0, 0, 0, .4)",
				padding: "10px 0 0 0",
				background: "#8990BC"
			}),
			whatlist
    ]).setTitle('What\'s On');

    promoCard = new joCard([
			new joContainer([
				new joFlexrow([
					input = new joInput("http://davebalmer.wordpress.com/feed"),
				refreshbutton = new joButton('Refresh'),
				]),
			]).setStyle({
				borderTop: "1px solid rgba(255, 255, 255, .4)",
				borderBottom: "1px solid rgba(0, 0, 0, .4)",
				padding: "10px 0 0 0",
				background: "#8990BC"
			}),
			promolist
    ]).setTitle('Promotions');
  
    gamesCard = new joCard([
		new joGroup([
		    new joLabel("<strong>Validation Key</strong>"),
	    	new joFlexrow(gamekey = new joInput()),
		    validatebutton = new joButton('Next'),	
		])
    ]).setTitle('Games');

    gameChoiceCard = new joCard([
		new joTitle('Select your Game'),
		new joGroup([
		    tsearchbutton = new joButton('K Code'),	
		    logobutton = new joButton('Store Hopping'),	
		])
    ]).setTitle('Choose Game');

    tsearchCard = new joCard([
		new joTitle('K Code')
    ]).setTitle('K Code');

    logoCard = new joCard([
		new joTitle('Store Hopping')
    ]).setTitle('Store Hopping');

    listCard = new joCard([
		new joTitle('List Page'),
		datastring = new joHTML('This is a demonstration of some of the customization you can do with the Jo JavaScript framework. This demo displays some iOS-style touches such as a tab bar for navigation, a notification badge on the tab icon, and an action-sheet dialog.'),
    ]);

    /*Button events.*/
     
    /*Set badge text.*/
    badgebutton.selectEvent.subscribe(function() { 
		menu.setData([{type : "doc", badge: badgetext.getData()},		  
			{type : "about"}
		]);
		menu.refresh();
	})

  /*Send text via e-mail.*/
  	mailbutton.selectEvent.subscribe(function() { 
  		maildata(datastring.getData());
	}) 

    /*Show action sheet.*/
    slidebutton.selectEvent.subscribe(function() { 
	    scn.showPopup(slideCard);					     
	}) 

     /*Hide action sheet.*/
 	closebutton.selectEvent.subscribe(function() { 
	 	scn.hidePopup(slideCard);
	 	menu.refresh();	 
	})

	whatbutton.selectEvent.subscribe(function(){
		active = "home";
		stack.push(whatsonCard);

		this.yql = yql;
		this.input = input;

		refresh();
	})

	promobutton.selectEvent.subscribe(function(){
		active = "home";
		stack.push(promoCard);

		this.yql = yql;
		this.input = input;

		refresh();
	})

	aboutbutton.selectEvent.subscribe(function(){
		active = "home";
		stack.push(joCache.get('about'));
	})

	tsearchbutton.selectEvent.subscribe(function(){
		active = "games";
		stack.push(tsearchCard);
	})

	logobutton.selectEvent.subscribe(function(){
		active = "games";
		stack.push(logoCard);
	})

	validatebutton.selectEvent.subscribe(function(){
		active = "games";
		joFocus.set(this.input);
		if(gamekey.getData() === '123456789'){
			stack.push(gameChoiceCard);
		}else{
			scn.showPopup(invalidCard);
		}
	})
      
    // Set up the page elements		
    scn = new joScreen(
			container = new joContainer([
				nav = new joNavbar('Home'),
				maincontainer =  new joFlexcol([
					stack = new joStackScroller()
				]),

		    //   	new joContainer([
			//   	stack = new joStackScroller(),				    
				menu = new joTabBar([
			    	{type : "home"},
			    	{type : "directory"},
			    	{type : "games"}
				])				  
				// Very Important! No content displays without this line
			]).setStyle({position: "absolute", top: "0", left: "0", bottom: "0", right: "0"})
		);

    nav.setStack(stack);
    
    /*
    stack.popEvent.subscribe(function(){
    	console.log(stack);
    });

    stack.pushEvent.subscribe(function(){
    	console.log(stack);
    });
  	*/

    // Set the functionality of the menu 
    menu.selectEvent.subscribe(function(id) {
		if (id == 0) {
			active = "home";
			nav.setTitle("Home");
			stack.push(joCache.get('home'));					
		}
						
		if (id == 1) {
			active = "about";
			nav.setTitle("Directory");
		    nav.setStack(stack);
			stack.push(directoryCard);

			this.yql = yql;
			this.input = input;

			refresh();
		} //if		

		if (id == 2) {
			active = "games";
			nav.setTitle("Games");
		    nav.setStack(stack);
			stack.push(gamesCard);
		} //if

	});

    menu.setIndex(0);     

	refresh = function() {
		joFocus.set(this.input);
		yql.setQuery("select title from rss where url='" + this.input.getData() + "' limit 200");
//		console.log(this.yql.query)
		yql.exec();
	}
	
	//joGesture.backEvent.subscribe(stack.pop, stack); 

})();
			







