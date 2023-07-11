import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import LoginModal from "./LoginModal";
import JoinModal from "./JoinModal";
import BookAdd from "./BookAdd";
import dummy from "../db.json";

const Header = () => {
  const [modalopen, setModalopen] = useState(false);
  const [joinopen, setJoinopen] = useState(false);
  const [bookAddOpen, setBookAddOpen] = useState(false);
  const user = dummy.user[0];
  const onLogin = () => {
    if (user.state !== "null") {
      return (
        <>
          <div>
            {user.userid}님 <button onClick={onClickLogout}>로그아웃</button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <button onClick={onClickLogin}>로그인</button>/
          <button onClick={onClickJoin}>회원가입</button>
        </>
      );
    }
  };
  const onClickLogout = () => {
    fetch("http://localhost:3001/user/1", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        state: "null",
        userid: "",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  ////////////////////////////모달 관리////////////////////////////////////
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
  ////////////////////////////모달 관리////////////////////////////////////

  return (
    <div className="header">
      <div className="headbox1">
        <Link to="/">Book Store</Link>
      </div>
      <div className="headbox2">{onLogin()}</div>
      {user.state === "admin" && (
        <div className="headbox3">
          <button onClick={() => onClickBookAdd(closeModal())}>책추가</button>
        </div>
      )}
      <Modal
        modalopen={modalopen}
        closeModal={closeModal}
        content={LoginModal(closeModal)}
      />
      <Modal
        modalopen={bookAddOpen}
        closeModal={closeModal}
        content={BookAdd()}
      />
      <Modal
        modalopen={joinopen}
        closeModal={closeModal}
        content={JoinModal(closeModal)}
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
              <Link to="/ShoppingList">장바구니</Link>
            </li>
            <li>
              <Link to="/BuyPage">구매목록</Link>
            </li>
            <li>
              <Link to="/Catalog">게시판</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
