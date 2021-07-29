import styled from "styled-components";

export const ButtonItem = styled.button`
  border-radius: 16px;
  background-color: ${(props) =>
    props.orangeSchema ? "var(--orange)" : "var(--white)"};
  color: ${(props) => (props.orangeSchema ? "var(--white)" : "var(--black)")};
  font-size: 18px;
  font-weight: 500;
  transition: 300ms;
  padding: 6px 32px;
  border: 3px solid
    ${(props) => (props.orangeSchema ? "var(--orange)" : "var(--grey)")};
  display: flex;
  align-items: center;
  font-weight: 600;
  position: relative;
  z-index: 400;
  svg {
    margin-left: 6px;
  }
  :hover {
    background-color: ${(props) =>
      props.orangeSchema ? "var(--dark-orange)" : "var(--white)"};
    color: ${(props) => (props.orangeSchema ? "var(--white)" : "var(--black)")};
  }
  @media (min-width: 800px) {
    font-size: 22px;
  }
`;
