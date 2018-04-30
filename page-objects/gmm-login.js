
module.exports = {

    url: 'https://dev.d.gmmsparta.com',

    elements: {
        key: "value"
    },

    enterUserName: function (userName) {
        return driver.findElement(By.name("username")).sendKeys(userName);
    },

    enterPassWord: function (passWord) {
        return driver.findElement(By.name("password")).sendKeys(passWord);
    },

    clickLogin: function () {
        return driver.findElement(By.xpath("//Button[text() = 'Login']")).click();
    },

    performLogin: function () {
        driver.findElement(By.name("password")).getAttribute("value").then(function (value) {
            expect(value).equal(shared.testData.password);
        });

        driver.wait(until.elementsLocated(By.name('content')), 10000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElements(By.name('content'));
        })
            .then(function (elements) {
                console.log("======================found the element =====" + elements);
                expect(elements.length).equal(1);
            });
        this.do508Check();
    },

    do508Check: function () {

        //call aXe for accessability testing(508)
        var AxeBuilder = require('axe-webdriverjs');
        AxeBuilder(driver)
            .analyze(function (results) {
                console.log(results);
            });
    }
};
