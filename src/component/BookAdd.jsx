import Divider from "./Divider";
import dummy from "../db.json";
import { useState } from "react";

const BookAdd = () => {
  const dbcategory = dummy.category;
  const [select, setSelect] = useState("");
  const [maker, setMaker] = useState("");
  const [img, setImg] = useState("");
  const [content, setContent] = useState("");
  const [bookName, setBookName] = useState("");
  const [cost, setCost] = useState(0);
  const selectCategory = (e) => {
    setSelect(e.target.value);
  };

  const onClickComplete = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: `${maker}의 ${bookName}`,
        category: select,
        bookimg: img,
        bookname: bookName,
        bookmaker: maker,
        bookcontent: content,
        cost: Number(cost),
      }),
    });
  };
  return (
    <div>
      <h2>책추가</h2>
      <Divider />
      <select onChange={selectCategory}>
        <option hidden>카테고리</option>
        {dbcategory.map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <form>
        <input
          onChange={(e) => setMaker(e.target.value)}
          placeholder="저자를 입력하세요"
        />
        <input
          onChange={(e) => setBookName(e.target.value)}
          placeholder="책이름을 입력하세요"
        />
        <input
          onChange={(e) => setImg(e.target.value)}
          placeholder="이미지 주소를 입력하세요"
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          placeholder="내용을 입력하세요"
        />
        <input
          onChange={(e) => setCost(e.target.value)}
          placeholder="가격을 입력하세요"
        />
        <div>
          <button onClick={onClickComplete}>제출</button>
        </div>
      </form>
    </div>
  );
};
export default BookAdd;
