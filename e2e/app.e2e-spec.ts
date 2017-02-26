import { CsdpAngularPage } from './app.po';

describe('csdp-angular App', function() {
  let page: CsdpAngularPage;

  beforeEach(() => {
    page = new CsdpAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
