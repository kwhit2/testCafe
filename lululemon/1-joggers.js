import { Selector } from 'testcafe';
// import { ClientFunction } from 'testcafe';

// Load GameStop homepage
fixture `My Lululemon Fixture`
    .page `https://shop.lululemon.com/`;

/* Populate Men's hjoggers
* 1. Hover/Click 'Men' section
* 2. Click 'Joggers'
*/
test('Populate Men joggers', async t => {
    const men = Selector('a').withAttribute('href').withText('//shop.lululemon.com/story/men');
    const joggers = Selector('tabindex').withAttribute('-1');

    await t
        .maximizeWindow()
        .expect(men.visible).ok()
        .click(men)
        .click(joggers);
})
