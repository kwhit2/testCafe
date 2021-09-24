import { Selector } from 'testcafe';

fixture('Google search')
    .page('https://google.com')

test('Search Test', async t => {
    await t
        .maximizeWindow()
        .typeText('input[name="q"]', 'testcafe')
        .click('input[name="btnK"]')
        .expect(Selector('div.yuRUbf').innerText).contains('TestCafe');

});