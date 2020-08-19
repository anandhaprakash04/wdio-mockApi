const in_hotel_management = require('@fixture/in-hotel-management.json');

describe( 'This test mocks api response of India category pages ',  () => {

    it('Should check Ireland Category page', () => {
        // @ts-ignore
        browser.cdp('Network', 'enable');
        // @ts-ignore
        browser.on('Network.responseReceived', (params) => {
            if(params.response.url.toString().includes('products-api')) {
                console.log(`Loaded ${params.response.url}`);
            }
        });
        const mock = browser.mock('https://products-api.softwareadvice.com/v0/categories/m25/products/v/public-geoip/o/active/master/in/p/0',
            {
                method: 'get',
            });
        mock.respond(in_hotel_management);
        browser.url('https://www.softwareadvice.com/hotel-management/?automated=true');
        browser.pause(10000);
        console.log(mock.calls.length);
    })
});




