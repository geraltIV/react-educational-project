import React, { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (event) => {
    event.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <form>
      {/*Input with value - керований компонент*/}
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Title"
      />
      {/*Input with refs - некерований компонент*/}
      <MyInput
        value={post.description}
        onChange={(event) =>
          setPost({ ...post, description: event.target.value })
        }
        type="text"
        placeholder="Description"
      />
      <MyButton onClick={addNewPost}>Add post</MyButton>
    </form>
  );
};

export default PostForm;
