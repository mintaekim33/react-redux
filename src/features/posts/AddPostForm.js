import { useState } from "react";

const AddPostForm = () => {
  const [title, setTitle] = useState(""); // temp state just for this component
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Add a new post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <button type="button">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
