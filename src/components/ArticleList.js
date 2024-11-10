import React from "react";

import Article from "./Article";

// Define the ArticleList component
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

// Export the ArticleList component
export default ArticleList;
