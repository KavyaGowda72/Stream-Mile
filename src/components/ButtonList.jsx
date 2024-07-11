import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Mutual Fund",
    "News",

    "Stocks",
    "Coding",
    "Music",
    "Documentary",
  ];
  return (
    <>
      <div className="flex  flex-row pt-2 md:pt-0  overflow-x-scroll scrollbar scrollbar-hide ">
        {list.map((item) => (
          <Button name={item} key={item} />
        ))}
      </div>
    </>
  );
};

export default ButtonList;
