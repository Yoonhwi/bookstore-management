const MovePage = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="movepage-item">
              <div onClick={() => paginate(number)} className="movepage-link">
                {number}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default MovePage;
