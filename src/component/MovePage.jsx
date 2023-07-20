import { useState } from "react";
const MovePage = ({ postsPerPage, totalPosts, paginate, current }) => {
  const [cutPage, setCutPage] = useState(0);
  const [checkPage, setCheckPage] = useState(1);
  const cutnum = 5;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const HandleClickNext = () => {
    if (pageNumbers.length / 5 > checkPage) {
      setCutPage((prev) => prev + cutnum);
      setCheckPage((prev) => prev + 1);
      paginate(Math.floor(current / cutnum + 0.9) * cutnum + 1);
    } else {
      alert("최대페이지");
    }
  };
  const HandleClickPrev = () => {
    if (cutPage === 0) {
      alert("최소페이지");
    } else {
      setCutPage((prev) => prev - cutnum);
      setCheckPage((prev) => prev - 1);
      paginate((Math.floor(current / cutnum) - 1) * cutnum + 5);
    }
  };
  console.log(current);
  return (
    <div>
      <nav>
        <ul className="pagination">
          <button className="pagination_item" onClick={() => HandleClickPrev()}>
            «
          </button>
          {pageNumbers.slice(cutPage, cutPage + cutnum).map((number, index) => (
            <button
              key={index}
              className={
                "pagination_item" + (number === current ? " active" : "")
              }
              onClick={() => {
                paginate(number);
              }}
            >
              {number}
            </button>
          ))}
          <button className="pagination_item" onClick={() => HandleClickNext()}>
            »
          </button>
        </ul>
      </nav>
    </div>
  );
};
export default MovePage;
