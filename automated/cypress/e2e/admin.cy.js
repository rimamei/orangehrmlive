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

  it("Create", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-autocomplete-text-input > input").type("Paul");
    cy.wait(4000);
    cy.get("body").click();
    cy.get(
      ":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("lodging");
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Adm123@@");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Adm123@@");
    cy.get(".oxd-button--secondary").click();
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });

  it("Update", () => {
    cy.get(
      ":nth-child(25) > .oxd-table-row > :nth-child(6) > .oxd-table-cell-actions > :nth-child(2)"
    ).click();
    cy.get(
      ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text"
    ).click();
    cy.get(".oxd-select-dropdown > :nth-child(2)").click();
    cy.get(".oxd-button--secondary").click();
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });

  it("Delete", () => {
    cy.get(".oxd-text--toast-title").should("have.text", "Success").click();
    cy.get(".oxd-button--label-danger").click();
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });
});
