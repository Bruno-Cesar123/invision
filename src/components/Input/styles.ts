import styled from "styled-components";

export const Container = styled.input`
  width: 100%;
  height: 48px;
  border: none;
  outline: none;
  border-bottom: 1px solid var(--gray-500);
  color: var(--black);

  &.error {
    border-bottom: 1px solid red;
  }
`;