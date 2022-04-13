import React, { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "JavaScript is a programming language.",
    },
    {
      id: 2,
      title: "React",
      description: "A JavaScript library for building user interfaces.",
    },
    {
      id: 3,
      title: "Vue.js",
      description:
        "An approachable, performant and versatile framework for building web user interfaces.",
    },
  ]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)} style={{ margin: "20px 0" }}>
        Create new post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <hr style={{ margin: "15px 0" }} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Posts List"
      />
    </div>
  );
}

export default App;
