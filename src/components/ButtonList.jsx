import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Scoccer",
    "News",
    "Mutual Funds",
    "Stocks",
    "Music",
    "Coding",
    "Stocks",
    "Music",
    "Coding",
  ];
  return (
    <>
      <div className="flex ml-5 mt-3 h-20 ">
        {list.map((item) => (
          <Button name={item} key={item} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
