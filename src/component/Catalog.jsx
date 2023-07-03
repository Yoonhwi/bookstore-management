import dummy from "../db.json";
import { useState, useEffect } from "react";
const Catalog = () => {
  const category = dummy.category;
  const allbooks = dummy.books;
  const [select, setSelect] = useState("");
  const [categoryInBook, setCategoryInBook] = useState();
  useEffect(() => {
    setCategoryInBook(allbooks.filter((data) => data.category === select));
  }, [select]);

  return (
    <div>
      <div className="page">
        <div className="catalog_category">
          {category.map((item) => (
            <input
              className="catalog_category_button"
              type="button"
              value={item}
              onClick={(e) => setSelect(e.target.value)}
            />
          ))}
        </div>
        <div className="catalogpage">
          {categoryInBook?.map((item, index) => {
            return (
              <div key={index} className="catalogpage_item">
                <img src={item.bookimg} alt="" />
                <div>책이름:{item.bookname}</div>
                <div>저자:{item.bookmaker}</div>
                <div>내용:{item.bookcontent}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Catalog;
