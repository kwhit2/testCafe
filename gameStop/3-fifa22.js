import { Selector } from 'testcafe';

// Load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

/* Pre-Order/Add FIFA 22 to shopping cart
* 1. Type 'fifa' into gamestops 'Search' bar.
* 2. Click the 'fifa 22' search result from the dropdown menu...
* ...of suggested items.
* 3. Click the PS5 version of fifa 22 from the newly...
* ...populated fifa 22 gaming platform results
* 4. Click 'Pre-Order'
*/
test('Add FIFA 22 to shopping cart', async t => {
    const searchBar = Selector('input').withAttribute('type', 'search').withAttribute('name', 'q');
    const fifaPs5 = Selector('a').withAttribute('title', 'FIFA 22 - PlayStation 5');
    const preOrder = Selector('button').withAttribute('id', 'add-to-cart');

    await t
        .maximizeWindow()
        .typeText('input[name="q"]', 'fifa')
        .click('span[class="font-weight-bold js-suggestionitem"]')
        .click('a[title="FIFA 22 - PlayStation 5"]')
        //.expect(preOrder.visible).ok()
        //.click(preOrder);
});

// <button class="add-to-cart btn btn-primary " data-pid="11151938" id="add-to-cart" data-gtmdata="{&quot;productInfo&quot;:{&quot;sku&quot;:&quot;302227&quot;,&quot;productID&quot;:&quot;11151938&quot;,&quot;name&quot;:&quot;FIFA 22  - PlayStation 5&quot;,&quot;category&quot;:&quot;Video Games/PlayStation 5&quot;,&quot;brand&quot;:&quot;Electronic Arts&quot;,&quot;subGenre&quot;:&quot;&quot;,&quot;platform&quot;:&quot;PlayStation 5&quot;,&quot;condition&quot;:&quot;New&quot;,&quot;variant&quot;:&quot;New&quot;,&quot;genre&quot;:&quot;Sports&quot;,&quot;availability&quot;:&quot;Not Available&quot;,&quot;productType&quot;:&quot;regular&quot;,&quot;zoneSource&quot;:&quot;PDP&quot;,&quot;tradeinProductName&quot;:&quot;&quot;,&quot;programName&quot;:&quot;&quot;,&quot;tradeinOpted&quot;:&quot;&quot;},&quot;price&quot;:{&quot;sellingPrice&quot;:&quot;69.99&quot;,&quot;basePrice&quot;:&quot;&quot;,&quot;currency&quot;:&quot;USD&quot;}}" data-buttontext="Add to Cart" data-buttontextnotavailable="Not Available">Pre-Order</button>
