import { format, distanceInWords, differenceInDays } from "date-fns";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import PortableText from "../portableText";
import Container from "../container";
import AuthorList from "../AuthorList/AuthorList";
import { Image, Main, Grid, PublishDate, Categories } from "./styles";

const BlogPost = ({ _rawBody, authors, categories, title, mainImage, publishedAt }) => (
  <article>
    {mainImage && mainImage.asset && (
      <Image>
        <img
          src={imageUrlFor(buildImageObj(mainImage))
            .width(1200)
            .height(Math.floor((9 / 16) * 1200))
            .fit("crop")
            .auto("format")
            .url()}
          alt={mainImage.alt}
        />
      </Image>
    )}
    <Container>
      <Grid>
        <Main>
          <h1>{title}</h1>
          {_rawBody && <PortableText blocks={_rawBody} />}
        </Main>
        <aside>
          {publishedAt && (
            <PublishDate>
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Do, YYYY")}
            </PublishDate>
          )}
          {authors && <AuthorList items={authors} title="Authors" />}
          {categories && (
            <Categories>
              <h3>Categories</h3>
              <ul>
                {categories.map(category => (
                  <li key={category._id}>{category.title}</li>
                ))}
              </ul>
            </Categories>
          )}
        </aside>
      </Grid>
    </Container>
  </article>
);

export default BlogPost;
