import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-zinc-800 px-5 py-1 m-2 text-center rounded-lg whitespace-nowrap   ">
        {name}
      </button>
    </div>
  );
};

export default Button;
