import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
  if (!posts.length) {
    return (
      <h2 style={{ marginTop: "15px", textAlign: "center" }}>
        We couldn't find any post...
      </h2>
    );
  }
  return (
    <div>
      <h1 style={{ color: "green", textAlign: "center" }}>{title}</h1>
      {posts.map((post, index) => (
        <PostItem
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default PostList;
