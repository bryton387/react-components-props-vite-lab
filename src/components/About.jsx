// About Component
// Renders the blog about section with logo and description
// Used by: App.jsx
// Props: 
//   - image (string) - URL/path to the blog logo image
//   - about (string) - description text for the blog

import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215";
  
  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;