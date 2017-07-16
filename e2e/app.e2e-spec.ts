import { NodestorePage } from './app.po';

describe('nodestore App', () => {
  let page: NodestorePage;

  beforeEach(() => {
    page = new NodestorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
