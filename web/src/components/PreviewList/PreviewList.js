import { Link } from "gatsby";
import React from "react";
import BlogPostPreview from "../blog-post-preview";
import { Main, Grid, MoreNav } from "../PreviewGrid/styles";

const PreviewList = ({ title, nodes, browseMoreHref }) => {
  return (
    <Main>
      {title && <h2>{title}</h2>}
      <Grid>
        {nodes &&
          nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} isInList />
            </li>
          ))}
      </Grid>
      {browseMoreHref && (
        <MoreNav>
          <Link to={browseMoreHref}>Browse more</Link>
        </MoreNav>
      )}
    </Main>
  );
};

PreviewList.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default PreviewList;
