class Header {
  getSignInLink() {
    return cy.get('.text-lg-left > .mr-3');
  }

  getSignUpLink(){
    return cy.get('.text-lg-left > .border-gray-dark')
  }

  getAddNewLink(){
    return cy.get('.HeaderNavlink > .octicon')
  }

  getAddNewOrgLink(){
    return cy.get('[href="/organizations/new"]')
  }

  getAddNewGistLink(){
    return cy.get('.dropdown-menu > [href="https://gist.github.com/"]')
  }
}

export default Header;