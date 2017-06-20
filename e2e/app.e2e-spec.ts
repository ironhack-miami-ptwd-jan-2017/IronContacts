import { ContactAppPage } from './app.po';

describe('contact-app App', () => {
  let page: ContactAppPage;

  beforeEach(() => {
    page = new ContactAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
