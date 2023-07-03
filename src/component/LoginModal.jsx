import JoinModal from "./JoinModal";
import Divider from "./Divider";
import { useState } from "react";
const LoginModal = () => {
  const [loginCheck, setLoginCheck] = useState(true);
  const onClickJoin = () => {
    setLoginCheck(false);
  };

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
            />
          </div>
          <div>
            <input
              type="password"
              className="login_password"
              placeholder="비밀번호"
            />
          </div>
          <div className="loginmodal_button">
            <button type="submit">로그인</button>
            <button onClick={onClickJoin}>회원가입</button>
          </div>
        </form>
      </div>
    );
  };
  return <div>{loginCheck ? loginModalLogin() : <JoinModal />}</div>;
};
export default LoginModal;
