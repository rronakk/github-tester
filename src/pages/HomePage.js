import Header from './Header';
import SignInPage from './SignInPage';

class HomePage {
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

    const signIn = new SignInPage();
    return signIn;
  }
}

export default HomePage;