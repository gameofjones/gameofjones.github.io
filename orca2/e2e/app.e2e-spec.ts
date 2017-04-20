import { Orca2Page } from './app.po';

describe('orca2 App', function() {
  let page: Orca2Page;

  beforeEach(() => {
    page = new Orca2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
