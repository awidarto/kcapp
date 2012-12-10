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


//console.log(window.localStorage);
var firstRun;
var db = window.openDatabase("kcityDB", "1.0", "KCityDB", 1000000);


			
var remoteBaseUrl = "http://www.kickstartlab.com/kcity/index.php";

var firstRunner = function(){
	db.transaction(populateDB, errorCB, fillDirectory);
	fillUpdates();
	window.localStorage.setItem("firstrun", false);
}

var fillDirectory = function(){
	$.jsonp({
        url: remoteBaseUrl + '?s=dir',
        callbackParameter: 'callback',
        timeout: 25000,
        success: function(data, status) {
        	db.transaction(function(tx){
        		for(i = 0; i < data.length; i++){
					//console.log(data[i]);
					tx.executeSql('INSERT INTO SHOPS (id, category, description, floor,sid,location,phone, shopname,t) VALUES ("' + data[i].id +
										'","' + data[i].category + 
										'","' + data[i].description + 
										'","' + data[i].floor +
										'","' + data[i].id +
										'","' + data[i].location +
										'","' + data[i].phone +
										'","' + data[i].shopname +
										'","' + data[i].t + '")');
        		}
        	}, errorCB, successCB);
        },
        error: function(){
        	//console.log('jsonp error');     
        }
    });	
}

var fillUpdates = function(){
	$.jsonp({
        url: remoteBaseUrl + '?s=news',
        callbackParameter: 'callback',
        timeout: 25000,
        success: function(data, status) {
        	db.transaction(function(tx){
        		for(i = 0; i < data.length; i++){
					//console.log(data[i]);
					tx.executeSql('INSERT INTO NEWS (id, sid, t, title, short, body, section, is_head) VALUES ("' + data[i].id +
										'","' + data[i].id + 
										'","' + data[i].t + 
										'","' + data[i].title +
										'","' + data[i].short +
										'","' + data[i].body +
										'","' + data[i].section +
										'","' + data[i].is_head + '")');
        		}
        	}, errorCB, successCB);
        },
        error: function(){
        	//console.log('jsonp error');     
        }
    });	
}

var populateDB = function(tx) {	
	tx.executeSql('DROP TABLE IF EXISTS DEMO');

	tx.executeSql('DROP TABLE IF EXISTS DEMO');
	tx.executeSql('CREATE TABLE IF NOT EXISTS DEMO (id unique, data)');
	tx.executeSql('INSERT INTO DEMO (id, data) VALUES (1, "First row")');
	tx.executeSql('INSERT INTO DEMO (id, data) VALUES (2, "Second row")');

	tx.executeSql('DROP TABLE IF EXISTS SHOPS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS SHOPS (id unique, category, description, floor,sid,location,phone, shopname,t)');

	tx.executeSql('DROP TABLE IF EXISTS NEWS');
	tx.executeSql('CREATE TABLE IF NOT EXISTS NEWS (id unique, sid, t, title, short, body, section, is_head)');

	tx.executeSql('DROP TABLE IF EXISTS GAMES');
	tx.executeSql('CREATE TABLE IF NOT EXISTS GAMES (id unique, sid, t, title, short, body, section, is_head)');

}

var errorCB = function(tx, err) {
    //console.log("Error processing SQL: "+err);
}

// Transaction success callback
//
var successCB = function() {
    //console.log("success!");
}

var weekdays = [
	"Sun"
	,"Mon"
	,"Tue"
	,"Wed"
	,"Thu"
	,"Fri"
	,"Sat"
];



var today = new Date();
var daynow = weekdays[today.getDay()];
var todate = daynow + '/' + today.getMonth();

var dayone = new Date(2012, 12, 12, 15);
var daytwo = new Date(2012, 12, 13, 15);

var curr;



if(firstRun = window.localStorage.getItem("firstrun")){
	if(firstRun === true){
		window.localStorage.setItem("gamestate", "main");
		window.localStorage.setItem("gamekey", "123456789");
		window.localStorage.setItem("gamecluecurrent", "0");
		window.localStorage.setItem("gameanswercurrent", "0");

		window.localStorage.setItem("gamestep", 0);
		window.localStorage.setItem("gameanswer_1", "0");
		window.localStorage.setItem("gameanswer_2", "0");
		window.localStorage.setItem("gameanswer_3", "0");
		window.localStorage.setItem("gameanswer_4", "0");
		window.localStorage.setItem("gameanswer_5", "0");

		window.localStorage.setItem("gamescan_1", "0");
		window.localStorage.setItem("gamescan_2", "0");
		window.localStorage.setItem("gamescan_3", "0");
		window.localStorage.setItem("gamescan_4", "0");
		window.localStorage.setItem("gamescan_5", "0");

		if(daynow === 'Mon' || daynow === 'Wed' || daynow === 'Thu'){
			window.localStorage.setItem("gameinsession", "1");
		}else{
			window.localStorage.setItem("gameinsession", "0");		
		}
		firstRunner();
		window.localStorage.setItem("firstrun", false);
	}else{
		if(daynow === 'Mon' || daynow === 'Wed' || daynow === 'Thu'){
			window.localStorage.setItem("gameinsession", "1");
		}else{
			window.localStorage.setItem("gameinsession", "0");		
		}
	}
}else{
	console.log('firstrun created');
	window.localStorage.setItem("gamestate", "main");
	window.localStorage.setItem("gamekey", "123456789");
	window.localStorage.setItem("gamecluecurrent", "0");
	window.localStorage.setItem("gameanswercurrent", "0");

	window.localStorage.setItem("gamestep", 0);
	window.localStorage.setItem("gameanswer_1", "0");
	window.localStorage.setItem("gameanswer_2", "0");
	window.localStorage.setItem("gameanswer_3", "0");
	window.localStorage.setItem("gameanswer_4", "0");
	window.localStorage.setItem("gameanswer_5", "0");

	window.localStorage.setItem("gamescan_1", "0");
	window.localStorage.setItem("gamescan_2", "0");
	window.localStorage.setItem("gamescan_3", "0");
	window.localStorage.setItem("gamescan_4", "0");
	window.localStorage.setItem("gamescan_5", "0");

	if(daynow === 'Mon' || daynow === 'Wed' || daynow === 'Thu'){
		window.localStorage.setItem("gameinsession", "1");
	}else{
		window.localStorage.setItem("gameinsession", "0");
	}
	this.firstRunner();
	window.localStorage.setItem("firstrun", false);	
}


var getClue = function(){
	console.log('get game clue');
	whichdate = new Date();
	whichhour = whichdate.getHours();
	whichmin = whichdate.getMinutes();

	if(window.localStorage.getItem("gamestate") === "tsearch"){
		games = tsgames;
		for(var i = 0; i < games.length; i++){
			console.log(i);
			if(i === (games.length - 1)){
				if( games[i].min <= whichmin && parseInt(games[i].hour) == whichhour && games[i].day == daynow ){
					window.localStorage.setItem("gamecluecurrent", games[i].clue);
					window.localStorage.setItem("gameanswercurrent", games[i].answer);
				}
			}else{
				if( games[i].min <= whichmin && games[i + 1].min > whichmin && parseInt(games[i].hour) >= whichhour && games[i].day == daynow ){
					nextclue = games[i];
					//console.log(whichhour);
					//console.log(whichmin);
					//console.log(todate);
					console.log(nextclue);
					$('.cluebar').html(games[i].clue);
					window.localStorage.setItem("gamecluecurrent", games[i].clue);
					window.localStorage.setItem("gameanswercurrent", games[i].answer);
				}									
			}
		}
	}else if(window.localStorage.getItem("gamestate") === "logo"){
		games = lsgames;

		var idx = Math.floor((Math.random()*30)+1);

		console.log(idx);

		$('.cluebar').html('<img src="logos/' + games[idx].url + '" />');
		window.localStorage.setItem("gamecluecurrent", games[idx].url);
		window.localStorage.setItem("gameanswercurrent", games[idx].answer);
	}
}

var nextclue = null;

var insession = window.localStorage.getItem("gameinsession");

if(insession == 1){
	if(window.localStorage.getItem("gamestate") === "tsearch"){
		setInterval(function(){
			console.log('interval running');
			whichdate = new Date();
			whichhour = whichdate.getHours();
			whichmin = whichdate.getMinutes();

				console.log(whichhour);
				console.log(whichmin);
				console.log(daynow);

			games = tsgames;

			for(var i = 0; i < games.length; i++){
				console.log(i);
				if(i === (games.length - 1)){
					if( games[i].min <= whichmin && parseInt(games[i].hour) == whichhour && games[i].day == daynow ){
						window.localStorage.setItem("gamecluecurrent", games[i].clue);
						window.localStorage.setItem("gameanswercurrent", games[i].answer);
					}
				}else{
					if( games[i].min <= whichmin && games[i + 1].min > whichmin && parseInt(games[i].hour) >= whichhour && games[i].day == daynow ){
						nextclue = games[i];
						//console.log(whichhour);
						//console.log(whichmin);
						//console.log(todate);
						console.log(nextclue);
						$('.cluebar').html(games[i].clue);
						window.localStorage.setItem("gamecluecurrent", games[i].clue);
						window.localStorage.setItem("gameanswercurrent", games[i].answer);
					}									
				}
			}

		},10000);
	}

}






var gs = window.localStorage.getItem("gamestate"); // gamestate

var whatdata = [];

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

//var db = window.openDatabase("kcitydb", "1.0", "KCityDb", 1000000);

/*Now we get to the demo itself.*/

var kApp = function () {
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
		getCurrentLogo();
		getCurrentScan();
		return true;
    }

    /*Mail "about" data using native e-mail client. Shows how to integrate Jo with other apps on platform.*/
    function maildata(data) {
		mailstring = data.replace(/<\/?[a-z][a-z0-9]*[^<>]*>/ig, "");
		location.href = "mailto: ?&subject=Hi%20from%20Jo!&body=" + mailstring;
    }

	var yql = new joYQL("select title from rss where url='http://davebalmer.wordpress.com/feed'");

	var dirdata = new Array();
	var dirlist = new joList(dirdata).attach(document.body);
	dirlist.formatItem = function(data, index) {
		console.log(data.title);
		return joList.prototype.formatItem.call(this, data.shopname, index);
	};

	// whatson initial list
	var whatdata = new Array();
	var whatlist = new joList(whatdata).attach(document.body);
	whatlist.formatItem = function(data, index) {
		//console.log(data.title);
		return joList.prototype.formatItem.call(this, data.title, index);
	};

	var promodata = new Array();
	var promolist = new joList(promodata).attach(document.body);
	promolist.formatItem = function(data, index) {
		//console.log(data.title);
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

	popCard = [
		popTitle = new joTitle('Correct Answer'),
		popBody = new joHTML('Now you may scan the QR code at the store.'),
		new joDivider(),	 
		popclosebutton = new joButton('Close'),
	];

    loader = [new joHTML('Loading...')];
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
					dirrefreshbutton = new joButton('Refresh'),
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
					whatsonrefreshbutton = new joButton('Refresh'),
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
					promorefreshbutton = new joButton('Refresh'),
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

    redeemCard = new joCard([
		new joGroup([
		    new joLabel("<strong>Redeem</strong>"),
	    	new joFlexrow(
	    		redeemKey = new joInput()
	    		),
		    redeembutton = new joButton('Redeem'),	
		])
    ]).setTitle('Games');


    gameChoiceCard = new joCard([
		new joTitle('Select your Game'),
		new joGroup([

		    tsearchbutton = new joButton('K Code'),	
		    logobutton = new joButton('Store Hopping'),	
		])
    ]).setTitle('Choose Game');

    var gamebar = '<div id="gamebar"><span id="1" >1</span><span id="2">2</span><span id="3">3</span><span id="4">4</span><span id="5">5</span></div>';

    var cluebar = '<div class="cluebar">Click Get Clue button to start the game</div>';

    tsearchCard = new joCard([
    	new joGroup([
	    	new joHTML(gamebar),
	    	new joDivider(),
		    tcluebar = new joHTML(cluebar),
	    	new joDivider(),
			tsgetcluebutton = new joButton('Get Clue'),
			tscanbutton = new joButton('Scan Now')
    	])
    ]).setTitle('K Code');

    logoCard = new joCard([
    	new joGroup([
	    	new joHTML(gamebar),
	    	new joDivider(),
		    lcluebar = new joHTML(cluebar),
	    	new joDivider(),
	    	new joLabel('What is the store name ?'),
	    	new joFlexrow([
				answerfield = new joInput(""),
				lsanswerbutton = new joButton('Answer')
    		]),
			lsgetcluebutton = new joButton('Get Clue'),
			lscanbutton = new joButton('Scan Now')
    	])
    ]).setTitle('Store Hopping');

    listCard = new joCard([
		new joTitle('List Page'),
		datastring = new joHTML('This is a demonstration of some of the customization you can do with the Jo JavaScript framework. This demo displays some iOS-style touches such as a tab bar for navigation, a notification badge on the tab icon, and an action-sheet dialog.'),
    ]);

    thankCard = new joCard([
		new joTitle('Thank You'),
		datastring = new joHTML("Thank you for participating in Kuningan City Game, it's been great fun having you playing with us!"),
    ]);

	var scard = function(data){
    	return new joCard(
			new joHTML(data.description)
		).setTitle(data.shopname);
    }

	var artcard = function(data){
    	return new joCard(
			new joHTML(data.body)
		).setTitle(data.title);
    }

   /*Button events.*/
     
    /*Set badge text.*/
    badgebutton.selectEvent.subscribe(function() { 
		menu.setData([{type : "doc", badge: badgetext.getData()},		  
			{type : "about"}
		]);
		menu.refresh();
	})

    tscanbutton.selectEvent.subscribe(function() { 
    	tsearchScan();
	})

    lscanbutton.selectEvent.subscribe(function() { 
    	logoScan();
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

	popclosebutton.selectEvent.subscribe(function() { 
	 	scn.hidePopup(popCard);
	})

	whatbutton.selectEvent.subscribe(function(){
		active = "home";
		getwhatson();
		stack.push(whatsonCard);
	})

	whatsonrefreshbutton.selectEvent.subscribe(function(){
		getwhatson();
	})

	promobutton.selectEvent.subscribe(function(){
		active = "home";
		getpromo();
		stack.push(promoCard);
	})

	promorefreshbutton.selectEvent.subscribe(function(){
		getpromo();
	})

	dirrefreshbutton.selectEvent.subscribe(function(){
		getdirectory();
	})

	aboutbutton.selectEvent.subscribe(function(){
		active = "home";
		stack.push(joCache.get('about'));
	})

	tsearchbutton.selectEvent.subscribe(function(){
		active = "games";
		gs = setGameState('tsearch');
		stack.push(tsearchCard);
	})

	logobutton.selectEvent.subscribe(function(){
		active = "games";
		gs = setGameState('logo');
		stack.push(logoCard);
	})

	tsgetcluebutton.selectEvent.subscribe(function(){
		getClue();
	})

	lsgetcluebutton.selectEvent.subscribe(function(){
		getClue();
	})

	lsanswerbutton.selectEvent.subscribe(function(){
		var answer = answerfield.getData();
		console.log(answer);
		putAnswer(answer);
	})

	validatebutton.selectEvent.subscribe(function(){
		active = "games";

		var validateVal = gamekey.getData();

		if(doRedeem(validateVal)){
			window.localStorage.setItem('gamevalidation',validateVal);
			gs = setGameState('choice');
			stack.push(gameChoiceCard);
		}else{
			scn.showPopup(invalidCard);
		}
	})

	redeembutton.selectEvent.subscribe(function(){
		active = "games";

		var redeemVal = redeemKey.getData();

		if(doRedeem(redeemVal)){
			window.localStorage.setItem('redeemvalidation',redeemVal);
			gs = setGameState('final');
			stack.push(thankCard);
		}else{
			scn.showPopup(invalidCard);
		}
	})

      
    // list event

    dirlist.selectEvent.subscribe(function(index){
    	var shopdata = dirdata[index];
    	stack.push(scard(shopdata));
    })

    whatlist.selectEvent.subscribe(function(index){
    	var article = whatdata[index];
    	stack.push(artcard(article));
    })

    promolist.selectEvent.subscribe(function(index){
    	var article = promodata[index];
    	stack.push(artcard(article));
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

  	var doRedeem = function(redeemkey){
  		var result = false;
  		for(var i = 0; i < gamecodes.length;i++){
  			if(redeemkey === gamecodes[i]){
  				result = true;
  			}
  		}
  		return result;
  	}

  	var getCurrentScan = function(){
		if(window.localStorage.getItem("gamestate") == 'tsearch'){
			console.log('get default scan');
			var step = window.localStorage.getItem("gamestep");

			if(parseInt(window.localStorage.getItem("gamecluecurrent")) === 0){

			}else{
				$('.cluebar').html(window.localStorage.getItem("gamecluecurrent"));
			}

			for(var i = 1; i < 6; i++ ){
				if(parseInt(window.localStorage.getItem("gamescan_" + i)) > 0){
					$('#gamebar #' + i).addClass('active');
				}
			}
		}	
  	}

	var getCurrentLogo = function(){
		if(window.localStorage.getItem("gamestate") == 'logo'){
			console.log('get default logo');
			var step = window.localStorage.getItem("gamestep");
			$('.cluebar').html('<img src="logos/' + window.localStorage.getItem("gamecluecurrent") + '" />');
			if(step === 0){
			}else{
				console.log(step);
				var gscan = window.localStorage.getItem("gamescan_" + step);
				console.log(gscan);
				if(parseInt(gscan) === 0){
					console.log('disable get clue');
					answerfield.disable();
					lsanswerbutton.disable();
					lsgetcluebutton.disable();
				}
			}

			for(var i = 1; i < 6; i++ ){
				if(parseInt(window.localStorage.getItem("gamescan_" + i)) > 0){
					$('#gamebar #' + i).addClass('active');
				}
			}
		}	
	}

	var putAnswer = function(answer){
		if(window.localStorage.getItem("gamestate") === "tsearch"){
			games = tsgames;
			for(var i = 0;i < games.length; i++){
				if(parseInt(games[i].min) <= whichmin && parseInt(games[i + 1].min) > whichmin && parseInt(games[i].hour) == whichhour){
					nextclue = games[i];
					console.log(whichhour);
					console.log(whichmin);
					console.log(todate);
					console.log(nextclue);
					$('.cluebar').html(games[i].clue);
					window.localStorage.setItem("gamecluecurrent", games[i].clue);
					window.localStorage.setItem("gameanswercurrent", games[i].answer);
				}
			}
		}else if(window.localStorage.getItem("gamestate") === "logo"){

			var ans  = answer.split(" ").join("").toLowerCase();
			console.log(ans);

			var currans = window.localStorage.getItem("gameanswercurrent");
			currans = currans.split(" ").join("").toLowerCase();

			console.log(currans);

			if(currans === ans){
				popTitle.setData('Correct Answer');
				popBody.setData('Now go the store and scan the QR code');
				scn.showPopup(popCard);
				var step = window.localStorage.getItem("gamestep");
				step = parseInt(step) + 1;
				console.log(step);
				window.localStorage.setItem("gamestep", step);
				window.localStorage.setItem("gameanswer_"+step, currans);
				answerfield.disable();
				lsanswerbutton.disable();
				lsgetcluebutton.disable();
			}else{
				popTitle.setData('Wrong Answer');
				popBody.setData('Please try again');
				scn.showPopup(popCard);				
			}

			//window.localStorage.setItem("gamestep", );
		}	
	}

	var logoScan = function(){
		
	    window.plugins.barcodeScanner.scan( function(result) {
	        

			var step = window.localStorage.getItem("gamestep");

			var curr_answer = window.localStorage.getItem("gameanswer_"+step);

			var scan_text = result.text.split(" ").join("").toLowerCase();
			
			if(curr_answer === scan_text){
				window.localStorage.setItem("gamescan_"+step, 1);

				if(parseInt(step) === 5){
					answerfield.disable();
					answerfield.setData("");
					lsanswerbutton.disable();
					lsgetcluebutton.disable();
					gs = setGameState('redeem');
					stack.push(redeemCard);
				}else{
					$('#gamebar #' + step).addClass('active');
					answerfield.enable();
					answerfield.setData("");
					lsanswerbutton.enable();
					lsgetcluebutton.enable();
					getClue();
				}				
			}

	    }, function(error) {
	        alert("Scan Cancelled");
	    });


	}

	var tsearchScan = function(){

		window.plugins.barcodeScanner.scan(function(result){

			var scan_text = result.text.split(" ").join("").toLowerCase();

	        var step = window.localStorage.getItem("gamestep");

	        var curr_ans = window.localStorage.getItem("gameanswercurrent");

	        var curr_ans_ts = curr_ans.split(" ").join("").toLowerCase();


	        if(curr_ans_ts === scan_text){
				step = parseInt(step) + 1;
				console.log(step);
				window.localStorage.setItem("gamestep", step);
				window.localStorage.setItem("gamescan_" + step, 1);

				if(parseInt(step) === 5){
					tsgetcluebutton.disable();
					gs = setGameState('redeem');
					stack.push(redeemCard);
				}else{
					$('#gamebar #' + step).addClass('active');
					popTitle.setData('Correct Answer');
					popBody.setData('Now wait for another clue');
					scn.showPopup(popCard);					
				}				
			}

		},function(error){

			alert(error);

		});

	    /*
	    window.plugins.barcodeScanner.scan( function(result) {
	        
			var step = window.localStorage.getItem("gamestep");

			var curr_answer = window.localStorage.getItem("gameanswercurrent");

			curr_answer = curr_answer.text.split(" ").join("").toLowerCase();

			var scan_text = result.text.split(" ").join("").toLowerCase();

	        alert("Result : " + scan_text);
			
			if(curr_answer === scan_text){
				window.localStorage.setItem("gamescan_"+step, 1);
				step = parseInt(step) + 1;
				console.log(step);
				window.localStorage.setItem("gamestep", step);

				if(parseInt(step) === 5){
					tsgetcluebutton.disable();
					gs = setGameState('redeem');
					stack.push(redeemCard);
				}else{
					$('#gamebar #' + step).addClass('active');
				}				
			}

	    }, function(error) {
	        alert("Scan failed : " + error);
	    });

	    */


	}

    // Set the functionality of the menu 
    menu.selectEvent.subscribe(function(id) {
		if (id == 0) {
			active = "home";
			stack.push(joCache.get('home'));					
		}
						
		if (id == 1) {
			active = "about";
			stack.push(directoryCard);
			getdirectory();
		} //if		

		if (id == 2) {
			active = "games";
			if(gs === "main"){
				stack.push(gamesCard);
			}else if(gs === "choice"){
				stack.push(gameChoiceCard);
			}else if(gs === "tsearch"){
				if(parseInt(step) === 5){
					stack.push(redeemCard);
				}else{
					stack.push(tsearchCard);
					getCurrentScan();					
				}
			}else if(gs === "logo"){
				var step = window.localStorage.getItem("gamestep");

				if(parseInt(step) === 5){
					stack.push(redeemCard);
				}else{
					stack.push(logoCard);
					getCurrentLogo();					
				}

			}else if(gs === "redeem"){
				stack.push(redeemCard);				
			}else if(gs === "final"){
				stack.push(thankCard);								
			}
		} //if

	});

    menu.setIndex(0);     

    setGameState = function(state){
    	window.localStorage.setItem("gamestate", state);
    	return state;	
    }

    getGameKey = function(){
    	var key = window.localStorage.getItem("gamekey");
		return key;    	
    }

	refresh = function() {
		joFocus.set(this.input);
		yql.setQuery("select title from rss where url='" + this.input.getData() + "' limit 200");
//		console.log(this.yql.query)
		yql.exec();
		console.log(yql);
	}

	var getwhatson = function(){
		query = "SELECT * FROM NEWS WHERE SECTION = 'whatson'";
		db.transaction(function(tx){
			tx.executeSql(query, [],whatQuerySuccess,errorCB);
		},errorCB);
	}

	var whatQuerySuccess = function(tx, res){
		whatdata.splice(0, whatdata.length);
		console.log(whatdata);

		for(var i=0; i < res.rows.length; i++){
			whatdata.push(res.rows.item(i));
		}

		whatlist.refresh();
	}

	var getpromo = function(){
		query = "SELECT * FROM NEWS WHERE SECTION = 'promo'";
		db.transaction(function(tx){
			tx.executeSql(query, [],promoQuerySuccess,errorCB);
		},errorCB);
	}

	var promoQuerySuccess = function(tx, res){
		promodata.splice(0, promodata.length);
		for(var i=0; i < res.rows.length; i++){
			promodata.push(res.rows.item(i));
		}
		promolist.refresh();
	}

	var getdirectory = function(){
		query = "SELECT * FROM SHOPS";
		db.transaction(function(tx){
			tx.executeSql(query, [],directoryQuerySuccess,errorCB);
		},errorCB);
	}

	var directoryQuerySuccess = function(tx, res){
		dirdata.splice(0, dirdata.length);
		for(var i=0; i < res.rows.length; i++){
			dirdata.push(res.rows.item(i));
		}
		dirlist.refresh();
	}
	
	//joGesture.backEvent.subscribe(stack.pop, stack); 

	init();

};