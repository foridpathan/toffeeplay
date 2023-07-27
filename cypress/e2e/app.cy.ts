// Cypress E2E Test
describe("Navigation", () => {
  it("should navigate to the 'De Dictator'", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "De Dictator" and click it
    cy.get('a[href*="/watch/tt0032553"]').click({ multiple: true });

    // The new url should include "/watch/tt0032553"
    cy.url().should("include", "/watch/tt0032553");

    // The new page should contain an h3 with "De Dictator""
    cy.get("h1").should("have.text", "De dictator");
  });
});

export {};
