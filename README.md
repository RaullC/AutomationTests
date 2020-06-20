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
