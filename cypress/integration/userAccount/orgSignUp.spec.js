import Home from '../../../src/pages/Home';
var uuid = require("uuid");


beforeEach(function () {
  // run these tests as if in a desktop
  // browser with a 720p monitor
  cy.viewport(1280, 720)
})


describe('Org Sign Up', () => {

  it('should signup with correct credentials', () => {
    const home = new Home();
    home.visit();

    home.goToSignIn()
      .fillEmail('321johndoe')
      .fillPassword('sema4john')
      .submit();

    const signUpOrg = home.goToOrgSignUp();
    const randomEmail = Math.random().toString(36).substring(7);

    signUpOrg
      .fillOrgName(uuid.v4())
      .fillBillingEmail(randomEmail+"@example.com")
      .createOrg();
  });
});