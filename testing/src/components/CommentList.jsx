import React from "react";
import styles from "./CommentList.module.css";

const CommentList = ({ comments }) => {
  return (
    <ul className={styles.comments}>
      {comments.map((comment, idx) => (
        <li key={idx}>{comment}</li>
      ))}
    </ul>
  );
};

export default CommentList;
