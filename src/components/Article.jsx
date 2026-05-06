// Article Component
// Renders a single blog article with title, date, and preview
// Used by: ArticleList.jsx
// Props:
//   - title (string) - the title of the article
//   - date (string) - the publication date (defaults to "January 1, 1970")
//   - preview (string) - the preview text of the article

import React from "react";

function Article({ title, date, preview }) {
  const defaultDate = "January 1, 1970";
  
  return (
    <article>
      <h3>{title}</h3>
      <small>{date || defaultDate}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;