import JoinModal from "./JoinModal";
import Divider from "./Divider";
import { useState, useEffect } from "react";
import dummy from "../db.json";
const LoginModal = () => {
  const [loginCheck, setLoginCheck] = useState(true);
  const [inputId, setInputId] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [checkId, setCheckId] = useState();
  const customers = dummy.customer;
  const onClickJoin = () => {
    setLoginCheck(false);
  }; //로그인창에서 회원가입창모달로 바로이동하기위함

  const isEqual = (customers, checkId) => {
    let checking = false;
    customers.map((item) => {
      if (JSON.stringify(item) === JSON.stringify(checkId)) {
        checking = true;
      }
    });
    return checking;
  }; // db.json > customers 에 checkId객체가 존재하는지 비교하는 함수

  const onClickLogin = (e) => {
    e.preventDefault();
    if (isEqual(customers, checkId)) {
      if (JSON.stringify(checkId.id) === JSON.stringify("tmdgnl1201")) {
        fetch("http://localhost:3001/user/1", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: "admin",
            userid: "관리자",
          }),
        });
      } else {
        fetch("http://localhost:3001/user/1", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            state: "customer",
            userid: checkId.id,
          }),
        });
      }
    } else {
      alert("아이디 비밀번호가 일치하지않습니다!");
    }
  };
  useEffect(() => {
    setCheckId({ id: inputId, password: inputPassword });
  }, [inputId, inputPassword]);
  ////id:입력받은id값,password:입력받은 password값 형식의 객체로 저장
  ////그후 dummy.customer에 존재하는지 확인 존재하면 완료 아니면 오류알람
  const loginModalLogin = () => {
    return (
      <div>
        <h2>로그인</h2>
        <Divider />
        <form>
          <div>
            <input
              type="text"
              className="login_username"
              placeholder="아이디"
              onChange={(e) => setInputId(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              className="login_password"
              placeholder="비밀번호"
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </div>
          <div className="loginmodal_button">
            <button onClick={onClickLogin}>로그인</button>
            <button onClick={onClickJoin}>회원가입</button>
          </div>
        </form>
      </div>
    );
  };
  return <div>{loginCheck ? loginModalLogin() : <JoinModal />}</div>;
};
export default LoginModal;
