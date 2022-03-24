import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchComments, saveComment } from "store/actions";
import styles from "./CommentBox.module.css";

const CommentBox = () => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const commentSubmitHandler = (event) => {
    event.preventDefault();

    if (comment.trim().length === 0) {
      return;
    }

    dispatch(saveComment(comment));
    setComment("");
  };

  const getCommentHandler = (event) => {
    const newComment = event.target.value;
    setComment(newComment);
  };

  const fetchCommentsHandler = () => {
    dispatch(fetchComments(comment));
  };

  return (
    <div>
      <form className={styles["comment-box"]} onSubmit={commentSubmitHandler}>
        <label htmlFor="comment">Enter a Comment</label>
        <textarea
          id="comment"
          placeholder="Here is my comment"
          onChange={getCommentHandler}
          value={comment}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <button onClick={fetchCommentsHandler}>Fetch Comment</button>
    </div>
  );
};

export default CommentBox;
