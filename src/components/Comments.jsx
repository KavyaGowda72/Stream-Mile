import React from "react";
import { FaUserCircle } from "react-icons/fa";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <>
      <div className="flex mt-1 mx-2 p-2 bg-gray-100  rounded-lg my-2 ">
        <FaUserCircle className="h-8 w-8" />

        <div className="mx-2 shadow-sm ">
          <p className="font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default Comments;
