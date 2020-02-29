import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "../blog-post-preview";
import { Main, Grid, MoreNav } from "./styles";

function PreviewGrid(props) {
  return (
    <Main>
      {props.title && <h2>{props.title}</h2>}
      <Grid>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </Grid>
      {props.browseMoreHref && (
        <MoreNav>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </MoreNav>
      )}
    </Main>
  );
}

PreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default PreviewGrid;
