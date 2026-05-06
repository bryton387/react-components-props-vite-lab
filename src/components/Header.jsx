// Header Component
// Renders the blog header with the blog name
// Used by: App.jsx
// Props: name (string) - the name of the blog

import React from "react";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;