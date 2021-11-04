import { ClientFunction } from 'testcafe';

// use require instread of import to avoid transpiling errrors
const getDocumentURI = require('./utils.js').getDocumentURI;

// Load DevExpress page
fixture `My fixture`
    .page `https://www.gamestop.com/`;

/*
* Import Functions to be Used as Client Function Dependencies
*/
test('My test', async t => {
    const getUri = ClientFunction(() => {
        return getDocumentURI();
    }, { dependencies: { getDocumentURI } });

    const uri = await getUri();

    await t
        .maximizeWindow()
        .expect(uri).eql('https://www.gamestop.com/');
});
