import React, { useRef } from "react";
import styles from "./CommentBox.module.css";

const CommentBox = (props) => {
  const commentRef = useRef(null);

  const commentSubmitHandler = (event) => {
    event.preventDefault();
    const newComment = commentRef.current.value;

    if (newComment.trim().length === 0) {
      return;
    }
    props.onAddComment(newComment);
    commentRef.current.value = "";
  };

  return (
    <form className={styles["comment-box"]} onSubmit={commentSubmitHandler}>
      <label htmlFor="comment">Enter a Comment</label>
      <textarea
        id="comment"
        placeholder="Here is my comment"
        ref={commentRef}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentBox;
