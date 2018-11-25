class Header {
  getSignInLink() {
    return cy.get('.text-lg-left > .mr-3');
  }

  getSignUpLink(){
    return cy.get('.text-lg-left > .border-gray-dark')
  }

  getAddNewOrgLink(){
    return cy.get('[href="/organizations/new"]')
  }

  getAddNewLink(){
    return cy.get('.HeaderNavlink > .octicon')
  }
}

export default Header;