import dummy from "../db.json";
import { useState, useEffect } from "react";
import MovePage from "./MovePage";
import Pagination from "./Pagination";

const Catalog = () => {
  const category = dummy.category;
  const allbooks = dummy.books;
  const [select, setSelect] = useState("자기계발");
  const [categoryInBook, setCategoryInBook] = useState(
    allbooks.filter((data) => data.category === select)
  ); //선택된 카테고리를 가진 책들

  const [currentPage, setCurrentPage] = useState(1); // 현재페이지
  const [postsPerPage, setPostsPerPage] = useState(3); //페이지당 보여주고싶은 컨텐츠수

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  const obj = {}; // category별 book갯수를 파악하기 위함

  category.forEach((item) => {
    obj[item] = Math.floor(
      (allbooks.filter((word) => word.category === item).length + 3) / 3
    );
  });

  const CurrentPosts = (post) => {
    if (post != undefined) {
      let currentPosts = 0;
      currentPosts = post.slice(indexOfFirst, indexOfLast);
      return currentPosts;
    }
  };

  useEffect(() => {
    setCategoryInBook(allbooks.filter((data) => data.category === select));
  }, [select]);

  return (
    <div className="page">
      <div className="catalog_category">
        {category.map((item, index) => (
          <input
            key={index}
            className="catalog_category_button"
            type="button"
            value={item}
            onClick={(e) => setSelect(e.target.value)}
          />
        ))}
      </div>
      {/* {Pagination(CurrentPosts(categoryInBook))} */}
      <Pagination post={CurrentPosts(categoryInBook)} />
      <MovePage
        postsPerPage={postsPerPage}
        totalPosts={obj[select]}
        paginate={setCurrentPage}
      />
    </div>
  );
};
export default Catalog;
