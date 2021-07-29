import { ButtonItem } from "./styles";

const Button = ({ onClickFunc, children, orangeSchema = false, ...rest }) => {
  return (
    <ButtonItem
      type="button"
      orangeSchema={orangeSchema}
      onClick={onClickFunc}
      {...rest}
    >
      {children}
    </ButtonItem>
  );
};

export default Button;
