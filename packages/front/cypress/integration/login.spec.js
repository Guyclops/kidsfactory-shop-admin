describe("LoginPage", () => {
  it("login", () => {
    cy.visit("/login");
    cy.get("#login-id").type("sftest");
    cy.get("#login-password").type("7225");
    cy.get("#login-button").click();
    cy.get("footer").contains("Built with Kidsfactory");
  });
});
