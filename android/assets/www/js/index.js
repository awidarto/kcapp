/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();

        var self = this;
        //routes urls 
        this.detailsURL = /^#employees\/(\d{1,})/;        
        this.ondetailsURL = /^#ondetail\/(\d{1,})/;        
        this.staticURL = /^#static\/(\d{1,})/;        

        this.whatsonURL = /^#whatson$/;        
        this.promoURL = /^#promo$/;        

        this.gamesURL = /^#games$/;        
        this.gamesChoiceURL = /^#gameschoice$/;        
        this.gamesTsearchURL = /^#gamestsearch$/;        
        this.gamesLogoURL = /^#gameslogo$/;        

        this.gamesResetURL = /^#gamesreset$/;        
        this.dataResetURL = /^#dbreset$/;        

        this.aboutURL = /^#about$/;        
        this.directoryURL = /^#directory$/;        

        this.registerEvents();
        //this.store = new MemoryStore(function(){
        this.store = new LawnStorageStore(function(){
            self.route();
        });

    },

    registerEvents: function() {

        $(window).on('hashchange', $.proxy(this.route, this));

        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // ... if yes: register touch event listener to change the "selected" state of the item
            $('body').on('touchstart', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        } else {
            // ... if not: register mouse events instead
            $('body').on('mousedown', 'a', function(event) {
                $(event.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(event) {
                $(event.target).removeClass('tappable-active');
            });
        }

    },

    route: function() {
        var self = this;
        var hash = String(window.location.hash);

        if (!hash || hash === '#home') {

            console.log('at home');

            if (this.homePage) {
                this.slidePage(this.homePage);
            } else {
                this.homePage = new MainView().render();
                this.slidePage(this.homePage);
            }
            self.setactive('home');
            return;
        }else{
            var match = hash.match(app.detailsURL);
            if (match) {
                this.store.findById(Number(match[1]), function(employee) {
                    self.slidePage(new DetailView(employee).render());
                });
            }            

            match = hash.match(app.ondetailsURL);
            if (match) {
                this.store.findArticleById(Number(match[1]), function(article) {
                    self.slidePage(new ArticleView(article).render());
                    self.setactive('home');
                });
            }            

            match = hash.match(app.aboutURL);
            if (match) {
                self.slidePage(new AboutView().render());
                self.setactive('home');
            }            
            
            match = hash.match(app.whatsonURL);
            if (match) {
                this.store.findArticleBySection('whatson', function(articles){
                    var viewObj = {};
                    viewObj.title = "What's On";
                    viewObj.feeds = articles;
                    self.slidePage(new FeedView(viewObj).render());
                    self.setactive('home');
                });
            }            
            
            match = hash.match(app.promoURL);
            if (match) {

                this.store.findArticleBySection('promo', function(articles){
                    var viewObj = {};
                    viewObj.title = "Promotions";
                    viewObj.feeds = articles;
                    self.slidePage(new FeedView(viewObj).render());
                    self.setactive('home');
                });

            }            

            match = hash.match(app.directoryURL);
            if (match) {
                self.slidePage(new DirectoryView(app.store).render());
                self.setactive('directory');
            }            
            
            match = hash.match(app.gamesURL);
            if (match) {
                this.store.getGameState(function(state){
                    if(state){
                        if(state === 'choice'){
                            self.slidePage(new GamesView("choice", this.store).render());                    
                        }else if(state === 'tsearch'){
                            self.slidePage(new GamesView("tsearch", this.store).render());                    
                        }else if(state === 'logo'){
                            self.slidePage(new GamesView("logo", this.store).render());                    
                        }else{
                            self.slidePage(new GamesView("main", this.store).render());                    
                        }
                    }else{
                        self.slidePage(new GamesView("main", this.store).render());                                            
                    }
                });
                self.setactive('games');
            }            

            match = hash.match(app.gamesChoiceURL);
            if (match) {
                self.slidePage(new GamesView("choice", this.store).render());
                self.setactive('games');
            }            

            match = hash.match(app.gamesTsearchURL);
            if (match) {
                this.store.setGameState('tsearch',function(result){
                    console.log;
                });
                self.slidePage(new GamesView("tsearch", this.store).render());
                self.setactive('games');
            }            

            match = hash.match(app.gamesLogoURL);
            if (match) {
                this.store.setGameState('logo',function(result){
                    console.log(result);
                });
                self.slidePage(new GamesView("logo", this.store).render());
                self.setactive('games');
            }
            //dev function, remove from final version
            match = hash.match(app.gamesResetURL);
            if (match) {
                this.store.setGameState(false,function(result){
                    console.log(result);
                });
                self.slidePage(new GamesView("main", this.store).render());
                self.setactive('games');
            }

            match = hash.match(app.dataResetURL);
            if (match) {
                this.store.dbreset(function(result){
                    console.log(result);
                });
                self.slidePage(new GamesView("main", this.store).render());
                self.setactive('games');
            }

        }
    },

    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    showAlert: function(message, title){
        if(navigator.notification){
            navigator.notification.alert(message, null, 'OK');
        }else{
            alert(title ? (title + ':' + message): message);
        }
    },

    setactive: function(tabname){
        if(tabname === 'home'){
            $('#home-tab').addClass('active');
            $('#directory-tab').removeClass('active');
            $('#games-tab').removeClass('active');
        }

        if(tabname === 'directory'){
            $('#home-tab').removeClass('active');
            $('#directory-tab').addClass('active');
            $('#games-tab').removeClass('active');
        }

        if(tabname === 'games'){
            $('#home-tab').removeClass('active');
            $('#directory-tab').removeClass('active');
            $('#games-tab').addClass('active');
        }

    },

    slidePage: function(page) {

        var currentPageDest,
            self = this;

        // If there is no current page (app just started) -> No transition: Position new page in the view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page stage-center');
            $('#container').append(page.el);
            this.currentPage = page;
            return;
        }

        // Cleaning up: remove old pages that were moved out of the viewport
        $('.stage-right, .stage-left').not('.homePage').remove();

        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }

        $('#container').append(page.el);

        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });

    }


};
