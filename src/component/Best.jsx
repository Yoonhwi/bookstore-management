import { useState } from "react";
import dummy from "../db.json";
const Best = () => {
  const word = dummy.best;
  console.log(word);
  return (
    <div className="bestpage">
      {word.map((item, index) => (
        <div className="bestpage_item" key={index}>
          <img src={item.bookimg} alt="" />
          <div>책이름:{item.bookname}</div>
          <div>저자:{item.bookmaker}</div>
          <div>내용:{item.bookcontent}</div>
        </div>
      ))}
    </div>
  );
};
export default Best;
