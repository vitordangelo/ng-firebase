import { NgFirebasePage } from './app.po';

describe('ng-firebase App', function() {
  let page: NgFirebasePage;

  beforeEach(() => {
    page = new NgFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
