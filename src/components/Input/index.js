import { InputItem, ErrorSpan, Label } from "./styles";

const Input = ({ placeholder, error, register, name, label, ...rest }) => {
  return register ? (
    <>
      <Label>{label}</Label>
      <InputItem
        {...register(name)}
        isErrored={!!error}
        placeholder={placeholder}
        errored={!!error}
        {...rest}
      ></InputItem>
      {!!error && <ErrorSpan>{error}</ErrorSpan>}
    </>
  ) : (
    <InputItem placeholder={placeholder} {...rest} />
  );
};

export default Input;
