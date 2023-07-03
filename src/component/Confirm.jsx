const Confirm = (id, message, isid) => {
  fetch("http://localhost:3001/customer")
    .then((res) => res.json())
    .then((data) =>
      data.map((item) => {
        if (item.id === id) {
          return message("이미 존재하는 아이디입니다."), isid(false);
        }
      })
    );
};
export default Confirm;
