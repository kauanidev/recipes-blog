import styled, { css } from "styled-components";

export const PaginationContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 60px;
`;

export const PaginationItemContainer = styled.button`
  min-width: 30px;
  height: 30px;
  padding: 0px 10px;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  font-weight: 600;

  &:disabled {
    opacity: 0.5;
    cursor: inherit;
  }

  ${(props) =>
    props.isCurrent &&
    css`
      background: ${props.theme.primary};
      min-width: 50px;

      &:disabled {
        opacity: 1;
      }
    `}
`;
