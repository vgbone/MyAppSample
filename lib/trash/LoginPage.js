var LoginPage = function() {

    //Constants - could be taken from a test DB for multilevel access test
    const URL = "https://secure.athennian.com/static/#/login";
    const USERNAME = "paperautotest1@outlook.com";
    const PASSWORD = "Paperpassword1!";
    const LOGIN_OK = "Login Successful";

    //Attributes - WebElements of the page
    this.usernameElement = element(by.model("auth.username"));
    this.passwordElement = element(by.model("auth.password"));
    this.submitElement = element(by.id("Login-Button"));

    //Methods - Actions performed at the page using the WebElements
    this.getLoginPage = function() {
        browser.get(URL);
    };
    this.login = function() {
        this.usernameElement.sendKeys(USERNAME).
        then(this.passwordElement.sendKeys(PASSWORD).then(this.submitElement.click()));
    };
};

//This will export the module to Node.js runtime environment
module.exports = LoginPage;