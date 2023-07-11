import Modal from "./Modal";
import { useCallback, useMemo, useState } from "react";
import BuyBookModal from "./BuyBookModal";
import React from "react";

const Pagination = ({ post }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState({});

  const onClickBook = (e) => {
    setBookData({ img: e.bookimg, cost: e.cost, bookname: e.id });
    setModalOpen(true);
  };
  const closeModal = useCallback(() => {
    setModalOpen(false);
  }, []);

  const Content = useMemo(() => {
    return (
      <BuyBookModal
        img={bookData.img}
        cost={bookData.cost}
        bookname={bookData.bookname}
        closeModal={closeModal}
      />
    );
  }, [bookData]);

  return (
    <div className="catalogpage">
      <Modal
        modalopen={modalOpen}
        closeModal={closeModal}
        // content={BuyBookModal({ img: bookData.img, cost: bookData.cost })}
        content={Content}
      />
      {post.map((item, index) => {
        return (
          <div
            key={index}
            className="catalogpage_item"
            onClick={() => onClickBook(item)}
          >
            <img src={item.bookimg} alt="" />
            <div>{`책이름:${item.bookname}`}</div>
            <div>저자:{item.bookmaker}</div>
            <div>내용:{item.bookcontent}</div>
            <div>가격:{item.cost}원</div>
          </div>
        );
      })}
    </div>
  );
};
export default Pagination;
