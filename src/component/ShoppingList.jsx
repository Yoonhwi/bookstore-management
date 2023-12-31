import { useEffect, useState } from "react";

const ShoppingList = () => {
  const [user, setUser] = useState("test112");
  const [list, setList] = useState([]);
  const [totalBook, setTotalBook] = useState(0);
  const [total, setTotal] = useState(0);
  const [currentBuy, setCurrentBuy] = useState([]);

  const refetchList = () => {
    fetch(`http://localhost:3001/customer/test112/list`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setList(res));
  };

  useEffect(() => {
    refetchList();
  }, []);

  useEffect(() => {
    let total = 0;
    list.map((item) => {
      total = total + item.result;
    });
    setTotal(total);
  }, [list]);

  const handleClickPlusHandler = (item) => {
    const num = item.buyNum;
    const itemcost = item.cost;
    fetch(`http://localhost:3001/list/${item.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img: item.img,
        cost: item.cost,
        result: itemcost * (num + 1),
        customerId: user,
        buyNum: num + 1,
        bookname: item.bookname,
      }),
    });
  };
  const handleClickMinusHandler = (item) => {
    const num = item.buyNum;
    const itemcost = item.cost;
    console.log("user:", user);
    console.log("num:", num);
    if (num === 1) {
      fetch(`http://localhost:3001/list/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      fetch(`http://localhost:3001/list/${item.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img: item.img,
          cost: item.cost,
          result: itemcost * (num - 1),
          customerId: user,
          buyNum: num - 1,
          bookname: item.bookname,
        }),
      });
    }
  };
  const deleteList = async () => {
    for (let i = 0; i < list.length; i++) {
      await fetch(`http://localhost:3001/list/${list[i].id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(list[i]),
      });
    }
  };
  const onClickBuy = async () => {
    const jsons = list.map((item) => ({
      id: `${item.bookname}${user}`,
      bookname: item.bookname,
      cost: item.cost,
      result: item.result,
      buyNum: item.buyNum,
      total,
      customerId: user,
    }));

    for (let i = 0; i < list.length; i++) {
      await fetch(`http://localhost:3001/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsons[i]),
      });
    }
    await deleteList();
    await refetchList();
  };
  return (
    <div className="page">
      <div className="shoppinglist">
        <div className="shoppinglist_cart">
          <div>상품금액 : {total}</div>
          <div>배송비 : </div>
          <div>포장비 : </div>
          <div>부가쇼핑백 : </div>
        </div>
        <div className="shopping_total">총 : {total}원</div>
        <button className="shopping_complete" onClick={() => onClickBuy()}>
          구매하기
        </button>
      </div>
      <table className="cart">
        <thead>
          <tr>
            <td />
            <td />
            <td>가격</td>
            <td>수량</td>
            <td>합계</td>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            const handleClickMinus = () => handleClickMinusHandler(item);
            const handleClickPlus = () => handleClickPlusHandler(item);
            return (
              <tr key={index}>
                <td>
                  <img src={item.img} alt="" className="cart_listimg" />
                </td>
                <td>{item.bookname}</td>
                <td>{item.cost}</td>
                <td className="cart_amountbutton">
                  <button onClick={handleClickMinus}>-</button>
                  <span>{item.buyNum}</span>
                  <button onClick={handleClickPlus}>+</button>
                </td>
                <td>{item.result}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ShoppingList;
