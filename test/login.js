/*describe('register new user on "Amazon"', () => {

    it('should create new user on "Amazon"', () => {

        browser.url('https://www.amazon.com');
        const buttonAccount = $('//*[@id="nav-link-accountList"]/span[1]');
        buttonAccount.click();
        const buttonCreateAccount = $('#createAccountSubmit');
        buttonCreateAccount.click();
        const name =$('#ap_customer_name');
        name.setValue('JackTestA');
        const email = $('#ap_email');
        email.setValue('raulcs22@protonmail.com');
        const password = $('#ap_password');
        password.setValue('123456');
        const repassword = $('#ap_password_check');
        repassword.setValue('123456');
        const submit = $('#continue');
        submit.click(); //After that, a window opens where you have to enter a code received by email.
        
    })


})*/

describe('login with valid credentials on "Amazon"', () => {

it('should log in on "Amazon"', () => {
            
    browser.url('https://www.amazon.com');
    const button = $('//*[@id="nav-link-accountList"]/span[1]');
    button.click();
    const email = $('#ap_email');
    email.setValue('raulcs22@protonmail.com');
    browser.keys('\uE007');
    const password = $('#ap_password');
    password.setValue('123456');
    browser.keys('\uE007');
    const title = browser.getTitle();
    expect(browser).toHaveTitle(' Your Amazon.com');

    })
})