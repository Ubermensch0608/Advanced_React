import React from "react";
import CommentBox from "components/CommentBox";
import { mount } from "enzyme/build";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it("has a textarea and a button", () => {
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

describe('the text area', ()=>{
  beforeEach(()=>{
    wrapped.find('textarea').simulate('change',{
      target: {value: 'new comment'}
    })
    wrapped.update();
  });

if('has a textarea that users can type in', ()=>{
  expect(wrapped.find('textarea').prop('value')).toEqual(
    'new comment'
  )
})

it("when form is submitted, text area gets emtied", () => {
  wrapped.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });

  wrapped.update();

  wrapped.find("form").simulate("submit");
  wrapped.update();
  expect(wrapped.find("textarea".prop("value").toEqualI('123456'))
))}


expect(wrapped.find('textarea'.prop('value')).toEqual('1 2 3 4 5 6'))