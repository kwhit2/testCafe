import { Selector } from 'testcafe';

fixture `My First Fixture`
    .page `http://devexpress.github.io/testcafe/example`;

test('My Third Test', async t => {
    // Type name into text editor and submit
    await t
        .typeText('#developer-name', 'Marla Nugget')
        .click('#submit-button')

        // Using an assertion to check if the header text is equal to the expected text (from inputtin name)
        .expect(Selector('#article-header').innerText).eql('Thank you, Marla Nugget!');
});
