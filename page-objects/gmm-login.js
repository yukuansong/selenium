module.exports = {

    url: 'https://dev.d.gmmsparta.com',

    elements: {
        menuItem: 'nav[role="navigation"] ul li a',
        productItem: 'main .pitem a'
    },

    enterUserName: function (userName) {
        driver.findElement(By.name("username")).sendKeys(userName);
    },

    enterPassWord: function (passWord) {
        driver.findElement(By.name("password")).sendKeys(passWord);
    },

    clickLogin: function () {
        driver.findElement(By.xpath("//Button[text() = 'Login']")).click();
    },

    doNothing: function () {
        driver.findElement(By.name("password")).getAttribute("value").then(function (value) {
            console.log("==============value ======" + value);
            expect(value).equal("Mycode123456789!");
        });

        driver.wait(until.elementsLocated(By.name('content')), 10000).then(function () {

            // return the promise of an element to the following then.
            return driver.findElements(By.name('content'));
        })
            .then(function (elements) {
                console.log("======================found the element ====="+elements);
                expect(elements.length).equal(1);
            });
    }
};
