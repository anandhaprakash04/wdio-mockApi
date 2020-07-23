import  {urlTest}  from  '@fixture/url.data';

describe('webdriver.io page', () => {
    it('should have the right title test', () => {
        browser.url(urlTest.webdriverio);
        expect(browser).toHaveTitle('WebdriverIO · Next-gen browser and mobile automation test framework for Node.js');
    })
});
