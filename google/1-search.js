import { Selector } from 'testcafe';

// Load Google homepage
fixture('Google search')
    .page('https://google.com')

/* Google search for TestCafe
* 1. Type text into google search bar
* 2. Click 'Google Search'
* 3. Ensure the first search result contains 'TestCafe'
*/
test('Search Test', async t => {
    await t
        .maximizeWindow()
        .typeText('input[name="q"]', 'testcafe')
        .click('input[name="btnK"]')
        .expect(Selector('div.yuRUbf').innerText).contains('TestCafe');

});
