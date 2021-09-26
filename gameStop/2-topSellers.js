import { Selector } from 'testcafe';

// Load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

// Check for visibility of Top Sellers h2 section of GME homepage
test('TopSellers visible Test', async t => {
    const topSellers = Selector('h2').withAttribute('class', 'heading').withAttribute('style', 'color:#282828');

    await t
        .maximizeWindow()
        .expect(topSellers.visible).ok();
});
