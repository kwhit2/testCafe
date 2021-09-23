import { Selector } from 'testcafe';

// load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

// Check for presence of NBA 2K image
test('2K Img Test', async t => {
    const img2k = Selector('img').withAttribute('src', 'https://media.gamestop.com/i/gamestop/NBA2K22_596x400_HPHero_D.webp');

    await t
        .maximizeWindow()
        .expect(img2k.exists).ok()
        .expect(img2k.visible).ok();
});
