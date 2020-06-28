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


## Create new user on Amazon.com

describe('register new user on "Amazon"', () => {   

it('should create new user on "Amazon"', () => {   
&nbsp; browser.url('https://www.amazon.com');   
&nbsp; const buttonAccount = $('//*[@id="nav-link-accountList"]/span[1]');   
&nbsp; buttonAccount.click();   

&nbsp; const buttonCreateAccount = $('#createAccountSubmit');   
&nbsp; buttonCreateAccount.click();   

&nbsp; const name =$('#ap_customer_name');   
&nbsp; name.setValue('JackTestA');   

&nbsp; const email = $('#ap_email');   
&nbsp; email.setValue('raul@protonmail.com');   

&nbsp; const password = $('#ap_password');   
&nbsp; password.setValue('1111111');  

&nbsp; const repassword = $('#ap_password_check');   
&nbsp; repassword.setValue('111111');   

&nbsp; const submit = $('#continue');   
&nbsp; submit.click(); //After that, a window opens where you have to enter a code received by email.   
&nbsp; })     
})   


## Check title, search and button on Ebay.com

describe('Ebay.de page', () => {   
 
it('should check "Ebay" title', () => {   
&nbsp; browser.url('https://www.ebay.com');   
&nbsp; const title = browser.getTitle();   
&nbsp; expect(browser).toHaveTitle('Electronics, Cars, Fashion, Collectibles & More | eBay');    
&nbsp; })   

it('should click on "Search" button', () => {     
&nbsp; const button = $('#gh-btn');   
&nbsp; button.click();   
&nbsp; })   
  
it('should contain "Electronics" button', () =>{   
&nbsp; const button = $('.ttl');   
&nbsp; expect(button).isDisplayed;   
&nbsp; })   
})    
