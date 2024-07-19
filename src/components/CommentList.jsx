import React from "react";
import Comments from "./Comments";

const CommentList = ({ comments }) => {
  if (!comments) return;

  return comments.map((comment, index) => (
    <div>
      <Comments key={index} data={comment} />

      <div className="pl-5 ml-5 border border-l-black">
        {/* recursion in components */}
        <CommentList key={comment} comments={comment.replies} />
      </div>
    </div>
  ));
};

export default CommentList;
