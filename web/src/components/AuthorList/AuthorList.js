import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import { List, Avatar } from "./styles";

function AuthorList({ items, title }) {
  return (
    <List>
      <h2>{title}</h2>
      <ul>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <li key={_key}>
              <div>
                <Avatar>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .fit("crop")
                        .url()}
                      alt=""
                    />
                  )}
                </Avatar>
              </div>
              <div>
                <div>{authorName || <em>Missing name</em>}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </List>
  );
}

export default AuthorList;
