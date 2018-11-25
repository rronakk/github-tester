
class GistHome {
  visit(){
    cy.visit("https://gist.github.com");
  }

  fillGistDescription(value){
    const field = cy.get('.input-block');
    field.clear();
    field.type(value);
    return this;
  }

  fillGistExtension(value){
    const field = cy.get('.input-group > .form-control');
    field.clear();
    field.type(value);
    return this;
  }

  fillGistContent(value){
    const field = cy.get('.CodeMirror-line');
    field.type(value);
    return this;
  }

  createPublicGist(){
    const button = cy.get('[value="1"]');
    button.click();
  }

  getGistTitle(){
    return cy.get('.gist-header-title > a');
  }

}

export default GistHome;
