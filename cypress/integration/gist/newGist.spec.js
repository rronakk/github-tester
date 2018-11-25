import Home from '../../../src/pages/Home';

beforeEach(function () {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 720)
  const home = new Home();
  home.visit();

  const signIn = home.goToSignIn();

  signIn
    .fillEmail('321johndoe')
    .fillPassword('sema4john')
    .submit();
})

describe('Create New Gist', () => {

  it('should be able to create a new public gist', () => {

    const home = new Home();
    const gistHome = home.goToGist()

    let gistName = 'helloWorld.txt'

    gistHome
      .fillGistDescription('hello world')
      .fillGistExtension(gistName)
      .fillGistContent("?")
      .createPublicGist()

    gistHome.getGistTitle()
      .should('exist')
      .contains(gistName)
  });
});