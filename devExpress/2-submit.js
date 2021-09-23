import { Selector } from 'testcafe';

fixture `My First Fixture`
    .page `http://devexpress.github.io/testcafe/example`;

test('My Second Test', async t => {
    // Type name into text editor and submit
    await t
        .typeText('#developer-name', 'Marla Nugget')
        .click('#submit-button');

        const articleHeader = await Selector('.result-content').find('h1');

        // Grab text from article header, from page that loads after clicking 'submit'
        let headerText = await articleHeader.innerText;
});
