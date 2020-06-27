# Tehnologies
- webdriverIO
- NPM
- JavaScript
- WDIO

# Test Samples

it('should have the right title', () => {  
        browser.url('https://www.emag.ro');  
        const title = browser.getTitle();  
        expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi');  
})  


## Login Test for Amazon.com

describe('login with valid credentials on "Amazon"', () => { 

it('should log in on "Amazon"', () => {  
browser.url('https://www.amazon.com');   
const button = $('//*[@id="nav-link-accountList"]/span[1]');  
button.click();     
const email = $('#ap_email');   
email.setValue('raulcs@protonmail.com');   
browser.keys('\uE007');   
const password = $('#ap_password');   
password.setValue('111111');   
browser.keys('\uE007');   
const title = browser.getTitle();   
expect(browser).toHaveTitle(' Your Amazon.com');   

})   
})   
