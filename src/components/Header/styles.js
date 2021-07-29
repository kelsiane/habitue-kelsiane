import styled from "styled-components";

export const Menu = styled.div`
  width: 100vw;
  display: grid;
  grid-gap: 1.5rem;
  padding: 0 20%;
  grid-template-columns: 1fr 1fr 2fr;
  height: 40px;
  background: var(--gradient-orange);
  p {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--white);
  }
`;
