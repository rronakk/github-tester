class SignInPage {
  visit() {
    cy.visit('/login');
  }

  getSignInError() {
    return cy.get('.flash > .container');
  }


  fillEmail(value) {
    const field = cy.get('#login_field');
    field.clear();
    field.type(value);

    return this;
  }

  fillPassword(value) {
    const field = cy.get('#password');
    field.clear();
    field.type(value);

    return this;
  }

  submit() {
    const button = cy.get('.btn');
    button.click();
  }
}

export default SignInPage;
