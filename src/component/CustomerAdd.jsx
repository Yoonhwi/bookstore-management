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
  });
};
export default CustomerAdd;
