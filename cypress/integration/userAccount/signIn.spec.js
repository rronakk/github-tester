import Home from '../../../src/pages/Home';

beforeEach(function () {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 720)
})


describe('Sign In', () => {

  it('should sign in with correct credentials', () => {
    const home = new Home();
    home.visit();

    const signIn = home.goToSignIn();

    signIn
      .fillEmail('321johndoe')
      .fillPassword('sema4john')
      .submit();

    home.getUserAvatar().should('exist');
  });

  it('should show an error message on empty input', () => {
    const home = new Home();
    home.visit();

    const signIn = home.goToSignIn();

    signIn.submit();

    signIn.getSignInError()
      .should('exist')
      .contains('Incorrect username or password.');

  });

});