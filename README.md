# testCafe
- Diving into automated testing with TestCafe and JavaScript!

# Requirements
- [Node.js](https://nodejs.org/en/download/) & npm (Note: the Node.js install package includes both Node and npm executables ([resource](https://stackoverflow.com/questions/20128584/npm-comes-with-node-now-what-does-this-mean#:~:text=Yes%2C%20the%20nodejs%20package%20includes,when%20packaged%20both%20are%20included.&text=When%20you%20install%20that%20.)))
    - Follow above 'Node.js' link and select the appropriate download for your system (For Windows 'Windows Installer (.msi)')
    - In your 'Downloads' folder double click the downloaded package (Windows download = 'node-v14.17.6-x64.msi') and follow the steps to install (I made no modifications to the suggested prompts during the installation process)
    - Search your computer for 'Node.js' click and drag 'Node.js' into your PowerShell Terminal (I dropped 'Node.js' into the intergrated terminal of VSCode that is running PowerShell)
    - The below commands will display your installed Node.js and npm versions

```
$ node -v
v14.17.6
```

```
$ npm -v
6.14.15
```
    
- [TestCafe](https://testcafe.io/documentation/402635/getting-started) <- Very helpful docs!

```
$ npm install -g testcafe
$ testcafe -v
1.16.0
```

- Make a .js file
- Import the testcafe module
```
import { Selector } from 'testcafe';
```
- Declare fixture/webpage
- Write test code in JavaScript
- When ready run test by calling testcafe, declaring testing platform/browser, specify test file(s) to run, add --skip-js-errors to make life easier
```
testcafe chrome 3-fifa22.js --skip-js-errors
```

### Due to ever upgrading and changing webpages some of the tests within this repo may no longer execute as expected. Thank you!
