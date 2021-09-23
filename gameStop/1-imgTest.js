import { Selector } from 'testcafe';

fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

const imageContainer = Selector('#image-container');

test('My First GME Test', async t => {
    // Check 2k image
    await t
        .maximizeWindow()
        .expect(imageContainer.exists).notOk();
});