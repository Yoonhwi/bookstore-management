import { useEffect } from "react";
import { getMyInfo } from "../utilities/api/getMyInfo";
const Footer = () => {
  useEffect(() => {
    getMyInfo().then((res) => console.log("유저:", res));
  }, []);

  return (
    <div className="footer">
      <div>2023 06 ~ by.SeongHwi</div>
    </div>
  );
};

export default Footer;
