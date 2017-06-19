import { LyndaProductPage } from './app.po';

describe('lynda-product App', () => {
  let page: LyndaProductPage;

  beforeEach(() => {
    page = new LyndaProductPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
