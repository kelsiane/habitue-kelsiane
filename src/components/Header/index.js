import { Menu } from "./styles";
import { FaRegEnvelope, FaPhoneSquareAlt } from "react-icons/fa";
const Header = () => {
  return (
    <Menu>
      <p>
        <FaRegEnvelope fontSize={"1.5rem"} />
        kelsianelima74@gmail.com
      </p>
      <p>
        <FaPhoneSquareAlt fontSize={"1.5rem"} />
        (88) 9 8129-3542
      </p>
      <p>
        <FaPhoneSquareAlt fontSize={"1.5rem"} />
        (88) 9 8129-3542
      </p>
    </Menu>
  );
};

export default Header;
