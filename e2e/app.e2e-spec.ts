import { Ng2TourOfHeroesPage } from './app.po';

describe('ng2-tour-of-heroes App', function() {
  let page: Ng2TourOfHeroesPage;

  beforeEach(() => {
    page = new Ng2TourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
