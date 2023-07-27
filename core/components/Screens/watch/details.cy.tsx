import { movieData } from "@/static/data";
import MovieDetails from "./details";

describe("<AboutPage />", () => {
  beforeEach(() => {
    cy.mount(<MovieDetails movie={movieData} />);
  });
  it("should display title", () => {
    cy.get("h1").contains("Supa Team 4");
  });
  it("should display details", () => {
    cy.get("h1").should("have.text", "Supa Team 4");
    cy.get('[data-cy="description"]').contains(
      "It follows four teenage girls living in a futuristic version of Lusaka, Zambia, who are recruited by a retired secret agent to save the world."
    );
  });
});
