import { Selector } from 'testcafe';

// Load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

// Check for presence of GameStop logo image
test('GameStop Logo Test', async t => {
    const gmeImg = Selector('img').withAttribute('class', 'nav-logo').withAttribute('alt', 'GameStop');

    await t
        .maximizeWindow()
        .expect(gmeImg.exists).ok()
});
