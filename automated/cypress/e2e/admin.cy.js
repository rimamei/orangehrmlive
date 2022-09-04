describe("Admin", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get('[type="submit"]').click();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
  });

  it("Search by username", () => {
    cy.get(".oxd-input").first().type("Admin");
    cy.get("[type='submit']").click();
    cy.get(".oxd-table-card").should("have.text", "Admin");
  });
});
