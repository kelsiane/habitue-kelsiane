import styled, { css, keyframes } from "styled-components";

export const InputItem = styled.input`
  border-radius: 16px;
  font-family: "Roboto", sans-serif;
  border: 2px solid var(--orange);
  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--orange);
    `}
  color: var(--black);
  font-size: 16px;
  width: 100%;
  padding: 8px 16px;
  animation-name: ${(props) => props.errored && "error"};
  animation-duration: 0.075s; // duration animation
  animation-iteration-count: 5; //numero de iteração
  animation-direction: alternate; // indo e vindo
  animation-fill-mode: backwards;
  ::placeholder {
    font-size: 1rem;
  }
  @media (min-width: 800px) {
    font-size: 20px;
    width: 100%;
    padding: 8px 16px;
  }
`;
// eslint-disable-next-line
const error = keyframes`
from{
    transform: translateX(-10px)
}
to {
    transform: translateX(10px);
}
`;
const opacityAppear = keyframes`
from{
    opacity: 0;
}
to{
    opacity: 1;
}`;
export const Label = styled.label`
  font-size: 1rem;
  color: var(--black);
`;
export const ErrorSpan = styled.span`
  font-size: 14px;

  color: var(--orange);
  animation: ${opacityAppear} 0.5s;
`;
