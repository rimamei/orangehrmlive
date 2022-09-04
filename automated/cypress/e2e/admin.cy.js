describe("PIM", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.get(":nth-child(1) > .oxd-main-menu-item").click();
  });

  it("Search by all query", () => {
    cy.get(":nth-child(2) > .oxd-input").type("Admin");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-autocomplete-text-input > input").type("paul");
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
    cy.get(".oxd-table-card > .oxd-table-row").should("have.length", 1);
  });
});
