import { ClientFunction } from 'testcafe';

// Load GameStop homepage
fixture `My GME Fixture`
    .page `https://www.gamestop.com/`;

// Get URL of current webpage
const gmeURL = ClientFunction(() => window.location.href);

// Verify GameStop URL
test('Confirm GME URL', async t => {
    await t
        .maximizeWindow()
        .expect(gmeURL()).contains('https://www.gamestop.com/');
})
