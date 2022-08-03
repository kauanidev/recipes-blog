import styled from "styled-components";
import { BasePageContainer } from "../../styles/global";

export const RecipesContainer = styled(BasePageContainer)``;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.gray};
  margin-top: 20px;
  color: ${(props) => props.theme.primary};
  transition: 0.4s;

  &:focus {
    border-color: ${(props) => props.theme.primary};
    outline: none;
  }

  &::placeholder {
    color: ${(props) => props.theme.gray};
  }
`;
