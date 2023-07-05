import Divider from "./Divider";
import { useState } from "react";
import CustomerAdd from "./CustomerAdd";
import Confirm from "./Confirm";
const JoinModal = (closeModal) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idMessage, setIdMessage] = useState(
    "4-12사이 대소문자 또는 숫자만 입력해 주세요!"
  );
  const [passwordMessage, setPasswordMessage] = useState(
    "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
  );
  const [passwordMessageRe, setPasswordMessageRe] =
    useState("동일한 비밀번호를 입력해주세요!");
  const [isId, setIsId] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordRe, setIsPasswordRe] = useState(false);

  const onChangeId = (e) => {
    setId(e.target.value);
    const idRegExp = /^[a-zA-z0-9]{4,12}$/;
    if (!idRegExp.test(e.target.value)) {
      setIdMessage("4-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("사용가능한 아이디 입니다.");
      setIsId(true);
    }
  };
  const onChangePassword = (e) => {
    Confirm(id, setIdMessage, setIsId);
    setPassword(e.target.value);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegExp.test(e.target.value)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("안전한 비밀번호 입니다.");
      setIsPassword(true);
    }
  };
  const onChangePasswordRe = (e) => {
    if (e.target.value === password) {
      setPasswordMessageRe("동일한 비밀번호입니다.");
      setIsPasswordRe(true);
    } else {
      setPasswordMessageRe("동일한 비밀번호를 입력해 주세요!");
      setIsPasswordRe(false);
    }
  };
  const onClickButtonJoin = (e) => {
    e.preventDefault();
    if (isPassword & isPasswordRe & isId) {
      CustomerAdd(id, password);
      alert("회원가입이 완료되었습니다.");
      closeModal();
    } else {
      alert("정상적으로 입력하세요!");
    }
  };
  return (
    <div className="joinmodal">
      <h2>회원가입</h2>
      <Divider />
      <form>
        <div>
          <input
            type="text"
            className="join_id"
            placeholder="아이디를 입력하세요"
            onChange={onChangeId}
          />
        </div>

        <div className="join_idmessage">{idMessage}</div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 입력하세요"
            onChange={onChangePassword}
          />
        </div>
        <div className="join_passwordmessage">{passwordMessage}</div>
        <div>
          <input
            type="password"
            placeholder="비밀번호를 한번더 입력하세요"
            onChange={onChangePasswordRe}
          />
        </div>
        <div className="join_passwordmessage">{passwordMessageRe}</div>
        <button onClick={onClickButtonJoin}>회원가입</button>
      </form>
    </div>
  );
};
export default JoinModal;
