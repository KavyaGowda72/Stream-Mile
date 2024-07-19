import React from "react";
import Comments from "./Comments";
import CommentList from "./CommentList";
const commentData = [
  {
    name: "Kavya Gowda",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "kay",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "kay",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "kay",
                text: "Lorem ipsum dolor sit amet.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kavya Gowda",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "Kavya Gowda",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "Kavya Gowda",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "kay",
                text: "Lorem ipsum dolor sit amet.",
                replies: [
                  {
                    name: "kay",
                    text: "Lorem ipsum dolor sit amet.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kavya Gowda",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "kay",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "kay",
            text: "Lorem ipsum dolor sit amet.",
          },
        ],
      },
    ],
  },
  {
    name: "Kavya Gowda",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "kay",
        text: "Lorem ipsum dolor sit amet.",
        replies: [
          {
            name: "kay",
            text: "Lorem ipsum dolor sit amet.",
            replies: [
              {
                name: "kay",
                text: "Lorem ipsum dolor sit amet.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Kavya Gowda",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "kay",
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
  },
];

const CommentsContainer = () => {
  return (
    <>
      <div className=" mt-8 ">
        <h1 className="font-bold text-2xl ml-1">Comments </h1>
        <CommentList comments={commentData} />
      </div>
    </>
  );
};

export default CommentsContainer;
