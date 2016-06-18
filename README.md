#Feedreader testing

This is a web-based application that reads RSS feeds. This app has also[Jasmine](http://jasmine.github.io/) included for performing test on it.

##Contents

1. How to run
2. How to use it
3. Tests
4. To do's


##How to run

To run this app [download](https://github.com/Mancinek/Feedreader-Testing/archive/master.zip) the repository and open the `index.html` file in your browser - the app will start immediately.

##How to use it

At the beginning you'll see first feed loaded. To change it click the "hamburger" menu icon, the menu will slide out, and check other feed.
At the bottom of page you'll find Jasmine window that contains test, that have been performed on this application.

## Tests

Within this app 7 tests has been performed using Jasmine engine:

1. Test that make sure that the allFeeds variable has been defined and that it is not empty.
2. Test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
4. Test that ensures the menu element is hidden by default.
5. Test that ensures the menu changes visibility when the menu icon is clicked.
6. Test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
7. Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.

## To do's

The 6th test checks only first feed (loadFeed(0)) - the test could be also performed on other feeds.
The 7th test checks changing content between second (loadFeed(1)) and first feed (loadFeed(0)) - it could be also tested on other feeds.

##How the code is organized

The application runs on basis of few main files:

* `Jasmine` engine with `feedreader.js` spec file that holds the application test
* `app.js` that defines how the app works
* `index.html` that loads the page and all scripts
* `style.css` with the style of the app
