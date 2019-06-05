<<<<<<< HEAD
import { browser, by, element } from 'protractor';

export class AppPage {
=======
import { browser, element, by } from 'protractor';

export class MeatPage {
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
<<<<<<< HEAD
    return element(by.css('jad-root h1')).getText();
=======
    return element(by.css('mt-root h1')).getText();
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
  }
}
