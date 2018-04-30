var {logger} = require("../logger");
module.exports = function () {

    this.Given(/^I am on the GMM login page$/, function () {

        // load google
        return helpers.loadPage(page.gmmLogin.url, 50);
    });

    this.When(/^I type the user name "([^"]*)"$/, function (userName) {

        // click an item in the search results via the google page object
        return page.gmmLogin.enterUserName(userName);
    });

    this.When(/^I type the password "([^"]*)"$/, function (passWord) {

        // enter the user name
        return page.gmmLogin.enterPassWord(passWord);
    });

    this.When(/^I click the login button$/, function () {
        return page.gmmLogin.clickLogin();
    });

    this.Then(/^I should get into the gmm landing page and see some results$/, function () {

        return page.gmmLogin.performLogin();

    });

    // add after scenario hook
    this.AfterScenario(function (scenario, done) {
        console.log('AfterScenario: ' + scenario.getName());
        // page.gmmLogin.do508Check();

        done();

    });

};
