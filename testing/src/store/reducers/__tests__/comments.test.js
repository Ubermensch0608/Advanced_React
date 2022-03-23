import commentsReducer from "store/reducers/comments";
import { SAVE_COMMENT } from "store/actions/types";

it("handles actions of types SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment",
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("handles actions with unknown type", () => {
  const newState = commentsReducer([], { type: "SDFSDNFLKDNF" });

  expect(newState).toEqual([]);
});
