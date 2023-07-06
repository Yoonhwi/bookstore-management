const Pagination = (post) => {
  console.log(post);
  return (
    <div className="catalogpage">
      {post.map((item, index) => {
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
  );
};
export default Pagination;
