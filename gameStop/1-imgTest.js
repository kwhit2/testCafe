import { Selector } from 'testcafe';

// load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

// Check for presence of NBA 2K image
test('2K Img Test', async t => {
    const gmeImg = Selector('img').withAttribute('class', 'nav-logo').withAttribute('src', '/on/demandware.static/Site…default/dwabc0b3f2/images/svg-icons/logo-gs-2.svg');
    // const img2k = Selector('#image-container');

    await t
        .maximizeWindow()
        .expect(gmeImg.exists).ok();
        // .expect(img2k.visible).ok();
});

