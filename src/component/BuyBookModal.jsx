import { useCallback, useEffect, useState } from "react";
import dummy from "../db.json";
const BuyBookModal = (props) => {
  const { img, cost, bookname, closeModal } = props;
  const [buyNum, setBuyNum] = useState(0);
  const [result, setResult] = useState(0);
  const [check, setCheck] = useState(true);
  const user = dummy.user[0].userid;
  const list = dummy.list;
  const handlePlusClick = () => {
    setBuyNum((prev) => prev + 1);
  };

  useEffect(() => {
    setResult(buyNum * cost);
  }, [buyNum, cost]);

  const handleMinusClick = () => {
    buyNum === 0
      ? alert("더이상 뺼수 없습니다 !")
      : setBuyNum((prev) => prev - 1);
    setResult(buyNum * cost);
  };

  const onClickAddList = async () => {
    fetch(`http://localhost:3001/customer/${user}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: `${bookname}${user}`,
        bookname,
        img,
        cost,
        result,
        buyNum,
        customerId: user,
      }),
    }).then((res) => {
      if (res.status === 200 || res.status === 201) {
        alert("success");
        closeModal();
      } else {
        if (res.status === 500) {
          alert("이미 존재하는 상품입니다.");
        }
      }
    });
  };
  // useEffect(() => {
  //   // buyNum이 바뀌고 나서 실행할 로직
  //   console.log("mounted", buyNum);

  //   return () => {
  //     // buyNum이 바뀔때 실행할 로질
  //     console.log("unmounted", buyNum);
  //   };
  // }, [buyNum]);

  return (
    <div className="buybookmodal">
      <img src={img} alt="" className="buybookmodal_img" />
      <div>가격:{cost}원</div>
      <div className="buybookmodal_num">
        <button className="buybookmodal_numbutton" onClick={handlePlusClick}>
          추가
        </button>
        <button className="buybookmodal_numbutton" onClick={handleMinusClick}>
          빼기
        </button>
      </div>
      <div>
        {buyNum}권 총가격 : {buyNum * cost}원
      </div>
      <div>
        <button
          className="buybookmodal_addbutton"
          onClick={() => onClickAddList()}
        >
          장바구니에 추가!
        </button>
      </div>
    </div>
  );
};
export default BuyBookModal;
