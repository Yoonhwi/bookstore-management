import { useEffect, useState } from "react";
import dummy from "../db.json";
const BuyList = () => {
  const user = dummy.user[0].userid;
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (user != "") {
      fetch(`http://localhost:3001/customer/${user}/buy`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setList(res));
    }
  }, [user]);

  useEffect(() => {
    let result = 0;
    list.map((item) => (result = result + item.result));
    setTotal(result);
  }, [list]);

  return (
    <div className="page">
      <div>{user}님의 구매목록:</div>
      {list.map((item, index) => {
        return (
          <div key={index}>
            {item.bookname} {item.cost}원 {item.buyNum}권 총{item.result}원
          </div>
        );
      })}
      <div>총 구매 금액:{total}원</div>
    </div>
  );
};
export default BuyList;
