describe('webdriver.io page', () => {
    it('should have the right title test', () => {
        for(let i=0;i<100;i++){
            browser.deleteAllCookies();
            browser.url('https://www.softwareadvice.com/project-management/?gtm=false');
            console.log(`${i} : ${$('#top-recommended h2').isDisplayed() ? 'charleston' : 'neon'}`);
        }
    })
});
