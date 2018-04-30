
module.exports = {

    url: "https://dev.d.gmmsparta.com",

    elements: {
        key: "value",
    },
    
    clickRegistrationButton: function(){
        return driver.findElement(By.linkText("Register")).then(function(el){
            el.click();
        });
    },

    checkRegistrationPage: function(){
        driver.findElement(By.className("ui blue dividing header")).then(function(el){
            el.getText().then(function(value){
                expect(value).to.equal("Register a New Account");
            });
        });
        return driver.findElement(By.className("ui blue dividing header"));
    }
};