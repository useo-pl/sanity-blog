import styled from "styled-components";
import { PAD_L } from "../../styles/breakpoints";

const Image = styled.div`
  display: block;
  position: relative;
  background: var(--color-very-light-gray);
  padding-bottom: calc(9 / 16 * 100%);

  img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    vertical-align: top;
    object-fit: cover;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-column-gap: 2em;
  grid-template-columns: 1fr;

  @media (min-width: ${PAD_L}) {
    grid-template-columns: 3fr 1fr;
  }
`;

const Main = styled.div`
  a {
    color: var(--color-accent);

    @media (hover: hover) {
      &:hover {
        color: inherit;
      }
    }
  }

  h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    font-weight: 600;
  }

  figure {
    margin: 0;
    padding: 0;

    img {
      max-width: 100%;
    }
  }
`;

const PublishDate = styled.div`
  margin: 2rem 0 3rem;
  color: var(--color-gray);
`;

const Categories = styled.div`
  border-top: 1px solid var(--color-very-light-gray);
  margin: 2rem 0 3rem;

  ul {
    list-style: none;
    margin: 0.75rem 0;
    padding: 0;
  }

  ul li {
    padding: 0.25rem 0;
  }

  h3 {
    margin: 0.5rem 0 0;
  }
`;

export { Image, Grid, Main, PublishDate, Categories };
