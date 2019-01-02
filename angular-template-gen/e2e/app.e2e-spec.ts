import { AngularGenPage } from './app.po';

describe('angular-gen App', () => {
  let page: AngularGenPage;

  beforeEach(() => {
    page = new AngularGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
