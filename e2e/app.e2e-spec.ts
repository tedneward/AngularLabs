import { JokeAppPage } from './app.po';

describe('joke-app App', () => {
  let page: JokeAppPage;

  beforeEach(() => {
    page = new JokeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
