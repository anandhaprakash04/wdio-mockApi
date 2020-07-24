const ie_retail = require('@fixture/ie-hotel-management.json');

describe( 'This test mocks api response of Ireland category pages ',  () => {

    it('Should check Ireland Category page', () => {
        browser.cdp('Network', 'enable');
        browser.on('Network.responseReceived', (params) => {
            if(params.response.url.toString().includes('products-api')) {
                console.log(`Loaded ${params.response.url}`);
            }
        });
        const mock1 = browser.mock('https://products-api.softwareadvice.com/v0/categories/m25/products/v/public-geoip/o/active/master/in/p/0',
            {
                method: 'get',
            });
        mock1.respond(ie_retail);
        const mock2 = browser.mock('https://products-api.softwareadvice.com/v0/categories/m25/products/v/public-sorted/o/active/master/in/p/1',
            {
                method: 'get',
            });
        mock2.respond(ie_retail);
        browser.url('https://www.softwareadvice.com/hotel-management/?automated=true');
        browser.pause(20000);
        console.log(mock1.calls.length);
        console.log(mock2.calls.length);
        browser.debug();
    })
});




