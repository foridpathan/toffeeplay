import { movieData } from "@/static/data";
import MovieSection from ".";

// CARD ONE CHECKING
describe(`<MovieSection data={[movieData]} style="one" title="Cypres Test"  />`, () => {
  beforeEach(() => {
    cy.mount(
      <MovieSection data={[movieData]} style="one" title="Cypres Test" />
    );
  });
  it("should display", () => {
    cy.get("h1").contains("Cypres Test");
    cy.get("h3").contains("Supa Team 4");
    cy.get('[data-cy="year"]').contains("2023");
    cy.get('[data-cy="runtime"]').contains(
      `${movieData?.runtime?.seconds / 60} min`
    );
    cy.get('a[href="/watch/tt10241858"]').should("be.visible");
  });
});

// CARD TWO CHECKING
describe(`<MovieSection data={[movieData]} style="two" title="Cypres Test 2" />`, () => {
  beforeEach(() => {
    cy.mount(
      <MovieSection data={[movieData]} style="two" title="Cypres Test 2" />
    );
  });
  it("should display", () => {
    cy.get("h1").contains("Cypres Test 2");
    cy.get('a[href="/watch/tt10241858"]').should("be.visible");
  });
});
