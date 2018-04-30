
module.exports = function(){

    this.Given(/^I am on the GMM login page again$/, function(){
        // return helpers.loadPage(page.gmmRegistration.url);
        return helpers.loadPage(page.gmmRegistration.url, 50);
    });

    this.When(/^I click the Register button$/, function(){
        return page.gmmRegistration.clickRegistrationButton();
    });

    this.Then(/^I should see the registration page$/, function(){
        return page.gmmRegistration.checkRegistrationPage();
    });

};