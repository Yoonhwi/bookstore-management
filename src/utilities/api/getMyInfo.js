// export const getMyInfo = async () => {
//   return await fetch(`http://localhost:3001/user`).then((res) =>
//     res.json().then((res) => res[0])
//   );
// };

import axios from "axios";

export const getMyInfo = async () => {
  const { data } = await axios.get("http://localhost:3001/user");
  return data[0];
};
