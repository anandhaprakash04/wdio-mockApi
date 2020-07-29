const propertyProducts = require('@fixture/property-charleston.json');

describe( 'Mock API pn charleston page',  () => {

    it('This mocks the products list after selecting a filter on charleston page', () => {
        const mock = browser.mock('https://categories-api.softwareadvice.com/categories/7/products',
            {
                method: 'post',
            });
        mock.respond(propertyProducts);
        browser.url('https://www.softwareadvice.com/property/?blue_experiment=2#product-catalog');
        $('.CheckboxFilterComponent label[for="125"]').click();
        browser.pause(5000);
        console.log(mock.calls.length);
        console.log($('.ProductComponent .details__header--title').getText());
    })
});




