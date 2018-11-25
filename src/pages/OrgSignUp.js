class OrgSignUp {
  visit() {
    cy.visit('/organizations/new');
  }



  fillOrgName(value) {
    const field = cy.get('#organization_login');
    field.clear();
    field.type(value);

    return this;
  }

  fillBillingEmail(value) {
    const field = cy.get('#organization_billing_email');
    field.clear();
    field.type(value);

    return this;
  }


// Todo: this does not seem to work, since it is not focusing on the button
  createOrg() {
    cy.scrollTo('bottom')
    const button = cy.get('div:nth-child(3) > button');
    button.click({ force: true });
  }
}

export default OrgSignUp;
