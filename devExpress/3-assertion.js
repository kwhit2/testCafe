import { Selector } from 'testcafe';

// Load DevExpress page
fixture `My First Fixture`
    .page `http://devexpress.github.io/testcafe/example`;

/*
* 1. Type a developer name into the text editor
* 2. click 'Submit'
* 3. Using an assertion to check if the header text is equal...
*    ...to the expected text (from the input dev name)
*/
test('My Third Test', async t => {
    await t
        .typeText('#developer-name', 'Marla Nugget')
        .click('#submit-button')

        .expect(Selector('#article-header').innerText).eql('Thank you, Marla Nugget!');
});
