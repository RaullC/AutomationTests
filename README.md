# Tehnologies
- webdriverIO
- NPM
- JavaScript
- WDIO

# Test Samples

it('should have the right title', () => {  
&nbsp; browser.url('https://www.emag.ro');  
&nbsp; const title = browser.getTitle();  
&nbsp; expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi');  
})  


## Login Test for Amazon.com

describe('login with valid credentials on "Amazon"', () => { 

it('should log in on "Amazon"', () => {  
&nbsp; browser.url('https://www.amazon.com');   
&nbsp; const button = $('//*[@id="nav-link-accountList"]/span[1]');  
&nbsp; button.click();  

&nbsp; const email = $('#ap_email');   
&nbsp; email.setValue('raulcs@protonmail.com');   
&nbsp; browser.keys('\uE007');

&nbsp; const password = $('#ap_password');   
&nbsp; password.setValue('111111');   
&nbsp; browser.keys('\uE007'); 

&nbsp; const title = browser.getTitle();   
&nbsp; expect(browser).toHaveTitle(' Your Amazon.com');   
&nbsp; })   
})   
