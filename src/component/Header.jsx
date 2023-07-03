import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import JoinModal from "./JoinModal";
import BookAdd from "./BookAdd";
const Header = () => {
  const [modalopen, setModalopen] = useState(false);
  const [joinopen, setJoinopen] = useState(false);
  const [bookAddOpen, setBookAddOpen] = useState(false);
  const onClickLogin = () => {
    if (!modalopen) {
      setModalopen(true);
    }
  };
  const onClickJoin = () => {
    if (!joinopen) {
      setJoinopen(true);
    }
  };
  const onClickBookAdd = () => {
    if (!bookAddOpen) {
      setBookAddOpen(true);
    }
  };
  const closeModal = () => {
    setModalopen(false);
    setJoinopen(false);
    setBookAddOpen(false);
  };
  return (
    <div className="header">
      <div className="headbox1">
        <Link to="/">Book Store</Link>
      </div>
      <div className="headbox2">
        <button onClick={onClickLogin}>로그인</button>/
        <button onClick={onClickJoin}>회원가입</button>
      </div>
      <div className="headbox3">
        <button onClick={onClickBookAdd}>책추가</button>
      </div>
      <Modal
        modalopen={modalopen}
        closeModal={closeModal}
        content={<LoginModal />}
      />
      <Modal
        modalopen={bookAddOpen}
        closeModal={closeModal}
        content={<BookAdd />}
      />
      <Modal
        modalopen={joinopen}
        closeModal={closeModal}
        content={<JoinModal />}
      />
      <nav>
        <div className="nav_items">
          <ul>
            <li>
              <Link to="/">BEST!</Link>
            </li>
            <li>
              <Link to="/Catalog">도서목록</Link>
            </li>
            <li>
              <Link to="/Catalog">장바구니</Link>
            </li>
            <li>
              <Link to="/Catalog">장바구니</Link>
            </li>
            <li>
              <Link to="/Catalog">장바구니</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
