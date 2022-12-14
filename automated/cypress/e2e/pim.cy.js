describe("PIM", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
  });

  it("Search by ID", () => {
    cy.get(":nth-child(2) > .oxd-input").type("0038");
    cy.get(".oxd-form-actions > .oxd-button--secondary").click({ force: true });
    cy.get(".oxd-table-card > .oxd-table-row").should("have.length", 1);
  });

  it("Create", () => {
    cy.get(".orangehrm-header-container > .oxd-button").click({ force: true });
    cy.get(".oxd-file-div > .oxd-icon-button").click();
    cy.get("input[type=file]").attachFile("img.png");
    cy.get(
      ".--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input"
    ).type("Michael");
    cy.get(":nth-child(2) > :nth-child(2) > .oxd-input").type("Mi");
    cy.get(":nth-child(3) > :nth-child(2) > .oxd-input").type("N");
    cy.get(".oxd-switch-input").click();
    cy.get(
      ":nth-child(4) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("michael12");
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin123@");
    cy.get(
      ".oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("Admin123@");
    cy.get(
      ":nth-child(2) > :nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input"
    ).click();
    cy.get(".oxd-button--secondary").click();
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });
  
  it("Update personal details", () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true });
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type("N")
    cy.get(':nth-child(1) > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type("Al")
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get(':nth-child(5) > span').click()
    cy.get(':nth-child(1) > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });
 
  it("Update Custom Fields", () => {
    cy.get(':nth-child(1) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(2)').click({ force: true });
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-row > .oxd-grid-3 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get('.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button').click()
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });
 
  it("Delete", () => {
    cy.get(':nth-child(27) > .oxd-table-row > :nth-child(9) > .oxd-table-cell-actions > :nth-child(1)').click({ force: true });
    cy.get('.oxd-button--label-danger').click()
    cy.get(".oxd-text--toast-title").should("have.text", "Success");
  });
});
