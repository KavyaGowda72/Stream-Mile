import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-300 px-5 py-1 m-2 text-center rounded-lg ">
        {name}
      </button>
    </div>
  );
};

export default Button;
