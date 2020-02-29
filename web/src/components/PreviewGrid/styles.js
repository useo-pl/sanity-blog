import styled from "styled-components";
import { DEFAULT, PAD_S } from "../../styles/breakpoints";

const Main = styled.div`
  margin: 2em 0 4em;

  h2 {
    font-size: var(--font-micro-size);
    line-height: var(--font-micro-line-height);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 2rem 0;
  }
`;

const Grid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2em;

  @media (min-width: ${DEFAULT}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${PAD_S}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MoreNav = styled.div`
  margin-top: 1rem;
  text-align: right;

  a {
    display: inline-block;
    padding: 0.5rem 0;
    color: inherit;
    text-decoration: none;

    @media (hover: hover) {
      &:hover {
        color: var(--color-accent);
      }
    }
  }
`;

export { Main, Grid, MoreNav };
