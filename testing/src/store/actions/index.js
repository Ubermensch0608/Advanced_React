import { SAVE_COMMENT } from "./types";

const saveComment = (comment) => {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
};

export default saveComment;
