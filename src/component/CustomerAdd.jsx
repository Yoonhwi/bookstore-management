const CustomerAdd = (id, password) => {
  const newCustomer = { id, password };
  fetch("http://localhost:3001/customer", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: newCustomer.id,
      password: newCustomer.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
export default CustomerAdd;
