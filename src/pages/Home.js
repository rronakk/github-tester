import Header from './Header';
import SignIn from './SignIn';
import OrgSignUp from './OrgSignUp';
import GistHome from'./gist/GistHome';

class Home {
  constructor() {
    this.header = new Header();
  }

  visit() {
    cy.visit('/');
  }

  getUserAvatar() {
    return cy.get('.details-overlay > .HeaderNavlink > .avatar');
  }

  goToSignIn() {
    const link = this.header.getSignInLink();
    link.click();

    const signIn = new SignIn();
    return signIn;
  }

  goToOrgSignUp(){
    this.header.getAddNewLink().click()
    this.header.getAddNewOrgLink().click()

    return new OrgSignUp();
  }

  goToGist(){
    this.header.getAddNewLink().click()
    this.header.getAddNewGistLink().click()

    return new GistHome()
  }

}

export default Home;