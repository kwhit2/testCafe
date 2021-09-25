import { Selector } from 'testcafe';

// Load DevExpress page
fixture `My First Fixture`
    .page `http://devexpress.github.io/testcafe/example`;

/*
* 1. Type a developer name into the text editor
* 2. click 'Submit'
* 3. On the page that loads after clicking 'Submit' grab the innerText of result-content > h1
*/
test('My Second Test', async t => {
    await t
        .typeText('#developer-name', 'Marla Nugget')
        .click('#submit-button');

        const articleHeader = await Selector('.result-content').find('h1');

        let headerText = await articleHeader.innerText;
});
