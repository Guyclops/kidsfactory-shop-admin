describe("IndexPage", () => {
  it("visit", () => {
    cy.visit("/");
    cy.get("h6").should("have.text", "Kidsfactory 관리");
  });

  it("component state test", () => {
    cy.visit("/");
    cy.get("button:nth-child(2)").click();
    cy.get("h1:nth-child(1)").should("have.text", "component state 1");
  });

  it("mobx state test", () => {
    cy.visit("/");
    cy.get("button:nth-child(5)").click();
    cy.get("h1:nth-child(4)").should("have.text", "mobx state 1 0");
    cy.get("div:nth-child(2) > main > a").click();
    cy.get("div:nth-child(2) > main > h1").should("have.text", "Hi from the second page1");
  });
});
