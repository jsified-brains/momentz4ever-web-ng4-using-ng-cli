import { Momentz4everWebNg4Page } from './app.po';

describe('momentz4ever-web-ng4 App', () => {
  let page: Momentz4everWebNg4Page;

  beforeEach(() => {
    page = new Momentz4everWebNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
