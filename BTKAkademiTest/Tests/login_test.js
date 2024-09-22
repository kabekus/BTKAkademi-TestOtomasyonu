Feature('login');

Scenario('Success Login @testcase1 ',  ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/');
    I.waitForElement('#user-name')
    I.fillField('#user-name' , 'standard_user');
    I.fillField('#password' , 'secret_sauce');
    I.click('#login-button');
    I.seeInCurrentUrl('https://www.saucedemo.com/inventory.html')

});

Scenario('Failed Login / wrong Username @testcase2',  ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/');
    I.waitForElement('#user-name')
    I.fillField('#user-name' , 'aaa');
    I.fillField('#password' , 'secret_sauce');
    I.click('#login-button');
    I.see('Epic sadface: Username and password do not match any user in this service', '.error-message-container');


});

Scenario('Failed Login / wrong Password @testcase3',  ({ I }) => {
    I.amOnPage('https://www.saucedemo.com/');
    I.waitForElement('#user-name')
    I.fillField('#user-name' , 'standard_user');
    I.fillField('#password' , '123');
    I.click('#login-button');
    I.see('Epic sadface: Username and password do not match any user in this service', '.error-message-container');
  

});
