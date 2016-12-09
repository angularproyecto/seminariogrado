import { Sinteticos2Page } from './app.po';

describe('sinteticos2 App', function() {
  let page: Sinteticos2Page;

  beforeEach(() => {
    page = new Sinteticos2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
