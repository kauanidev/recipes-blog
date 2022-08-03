import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeItemContainer = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 362px;
  border-radius: 30px;
  overflow: hidden;
  background: ${(props) => props.theme.pink};

  &:nth-child(even) {
    background: ${(props) => props.theme.green};
    p {
      color: ${(props) => props.theme.white};
    }
  }

  p {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    text-align: center;
    padding: 0 5px;
  }

  &:hover div img {
    transform: scale(1.1);
  }
`;

export const RecipeImageContainer = styled.div`
  width: 100%;
  height: 268px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.4s;
  }
`;
