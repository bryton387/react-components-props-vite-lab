// ArticleList Component
// Renders a list of articles in a main container
// Used by: App.jsx
// Props:
//   - posts (array) - array of post objects containing id, title, date, preview

import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
          preview={post.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;