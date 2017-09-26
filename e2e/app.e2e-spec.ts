import { F1angularPage } from './app.po';

describe('f1angular App', () => {
  let page: F1angularPage;

  beforeEach(() => {
    page = new F1angularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
