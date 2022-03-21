import React from "react";
import { useSelector } from "react-redux";

import styles from "./CommentList.module.css";

const CommentList = () => {
  const comments = useSelector((state) => state.comments);

  return (
    <ul className={styles.comments}>
      {comments.map((comment, idx) => (
        <li key={idx}>{comment}</li>
      ))}
    </ul>
  );
};

export default CommentList;
