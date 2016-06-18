$(function() {

    describe('RSS Feeds', function() {

        // Test that make sure that the allFeeds variable has been defined and that it is not empty.
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // to be sure, before start the next two test, we check whether the allFeeds array exitsts and is not empty
        beforeEach(function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
        it('urls are defined', function() {
            allFeeds.forEach(function(element) {
                expect(element.url).toBeDefined();
                expect(element.url.length).not.toBe(0);
            });
        });

        // Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
        it('names are defined', function() {
            allFeeds.forEach(function(element) {
                expect(element.name).toBeDefined();
                expect(element.name.length).not.toBe(0);
            });
        });
    });


    describe('The menu', function() {

        // Test that ensures the menu element is hidden by default.
        it('is hidden by default', function() {
            // if the body element has 'menu-hidden' class then menu is hidden
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });

        // Test that ensures the menu changes visibility when the menu icon is clicked.
        it('changes visibility when the menu icon is clicked', function() {

            // to be sure, at the begining we check if the menu is hidden
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
            // first simulation of click on menu icon
            $('.icon-list').trigger('click');
            // after first click, body element should not have the 'menu-hidden' class - it means that menu has been shown
            expect($('body').hasClass('menu-hidden')).toBeFalsy();

            // second simulation of click on menu icon
            $('.icon-list').trigger('click');
            // after seceond click, body element shoud get the 'menu-hidden' class - it means that menu has been hidden
            expect($('body').hasClass('menu-hidden')).toBeTruthy();

        });

    });


    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed function is called and completes its work, there is at least
         * a single .entry element within the .feed container. */

        // before test the first feed is loaded
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        /// if the loaded feed has any .entry element defined the test is passed
        it('has at least one element', function(done) {
            expect($('.entry').html()).toBeDefined();
            done();
        });

    });


    describe("New Feed Selection", function() {

        //Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

        // variable that will hold the firstly loaded feed content
        var firstFeed;

        // before start testing, feed(1) is loaded and it's content is assigned to the first feed variable
        beforeEach(function(done) {
            loadFeed(1, done);
            firstFeed = $('.feed').html();
        });

        it('changes the feed content', function(done) {
            // other feed is loaded (in this case feed 0)
            loadFeed(0);
            // when new feed is loaded, its content is compared the the firstFeed content - it shoud not to be equal
            expect($('.feed').html()).not.toEqual(firstFeed);
            done();
        });

    });

}());