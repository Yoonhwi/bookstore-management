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
    <div className="buylistpage">
      <div>{user}님의 구매목록:</div>
      <table className="buylist_table">
        <thead className="buylist_thead">
          <tr>
            <td>책이름</td>
            <td>가격</td>
            <td>갯수</td>
            <td>총 금액</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index} style={{ textAlign: "center" }}>
                <td>{item.bookname}</td> <td>{item.cost}원</td>
                <td>{item.buyNum}권</td> <td>총{item.result}원</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>총 구매 금액:{total}원</div>
    </div>
  );
};
export default BuyList;
