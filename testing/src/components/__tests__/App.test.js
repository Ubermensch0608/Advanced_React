import React from "react";
import { shallow } from "enzyme";
import App from "App.js";
import CommentBox from "components/CommentBox.jsx";
import CommentList from "components/CommentList.jsx";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // Enzyme을 사용하여 수동으로 작성할 필요가 없어짐
  //   const div = document.createElement("div");
  //   ReactDOM.render(<App />, div);
  //   // Looks inside the div
  //   // and checks to see if the CommentBox is in there
  //   expect(div.innerHTML).toContain("Enter a Comment");
  //   ReactDOM.unmountComponentAtNode(div);

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
