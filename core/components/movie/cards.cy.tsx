import { movieData } from "@/static/data";
import { Card1, Card2 } from "./cards";

describe("<Card1 />", () => {
  beforeEach(() => {
    cy.mount(<Card1 movie={movieData} />);
  });
  it("should display", () => {
    cy.get("h3").contains("Supa Team 4");
    cy.get('[data-cy="year"]').contains("2023");
    cy.get('[data-cy="runtime"]').contains(
      `${movieData?.runtime?.seconds / 60} min`
    );
    cy.get('a[href="/watch/tt10241858"]').should("be.visible");
  });
});

describe("<Card2 />", () => {
  beforeEach(() => {
    cy.mount(<Card2 movie={movieData} />);
  });
  it("should display", () => {
    cy.get('a[href="/watch/tt10241858"]').should("be.visible");
  });
});
