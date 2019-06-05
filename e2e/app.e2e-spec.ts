<<<<<<< HEAD
import { AppPage } from './app.po';

describe('jedi-academy App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to jad!');
=======
import { MeatPage } from './app.po';

describe('meat App', function() {
  let page: MeatPage;

  beforeEach(() => {
    page = new MeatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
>>>>>>> acca9c737d1cd059f2a213d20a6a47c0f89003f7
  });
});
