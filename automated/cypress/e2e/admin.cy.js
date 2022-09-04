describe("Admin", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.wait(4000);
    cy.get(cy.get(".oxd-main-menu-item"));
    cy.wait(4000);
  });

  it("Search by ID", () => {
    cy.get(":nth-child(2) > .oxd-input").type("0038");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
    cy.get('.oxd-table-card > .oxd-table-row').should("have.length", 1);
  });

  //   it("Create", () => {
  //     cy.get(".orangehrm-header-container > .oxd-button").click();
  //     cy.get(".oxd-select-text-input").first().click();
  //     cy.get(".oxd-select-dropdown").should("have.text", "Admin");
  //   });
});
