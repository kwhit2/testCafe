import { Selector } from 'testcafe';

// Load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

/* Pre-Order/Add FIFA 22 to shopping cart
* 1. Type 'fifa 22 ps' into gamestops 'Search' bar.
* 2. Click the 'fifa 22 ps5' search result from the dropdown menu...
* ...of suggested items.
* 3. Click the PS5 version of fifa 22 from the newly...
* ...populated search result
* 4. Click 'Pre-Order'
*/
test('Add FIFA 22 to shopping cart', async t => {
    const searchBar = Selector('input').withAttribute('type', 'search').withAttribute('name', 'q');
    const fifaSearchResultPs5 = Selector('span').withText("5");
    const fifaPs5 = Selector('a').withAttribute('title', 'FIFA 22 - PlayStation 5');
    const preOrder = Selector('button').withAttribute('id', 'add-to-cart');

    await t
        .maximizeWindow()
        .typeText('input[name="q"]', 'fifa 22 ps')
        .click(fifaSearchResultPs5)
        .click('a[title="FIFA 22 - PlayStation 5"]')
        .click(preOrder);
});
