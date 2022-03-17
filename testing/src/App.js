import { useState } from "react";
import CommentBox from "./components/CommentBox";
import CommentList from "./components/CommentList";

function App() {
  const [commentList, setCommentList] = useState([]);

  const addCommentHandler = (newComment) => {
    setCommentList((prevComments) => [newComment, ...prevComments]);
  };

  return (
    <>
      <CommentBox onAddComment={addCommentHandler} />
      <CommentList comments={commentList} />
    </>
  );
}

export default App;
