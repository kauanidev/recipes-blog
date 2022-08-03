import styled from "styled-components";
import { PageHeader } from "../../components/PageHeader";
import { BasePageContainer } from "../../styles/global";

export const RecipeContainer = styled(BasePageContainer)`
  margin-bottom: 60px;

  h3 {
    color: ${(props) => props.theme.primary};
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 30px;
  }

  h4 {
    font-weight: 500;
    font-size: 20px;
    line-height: 40px;
  }
`;

export const RecipeOverviewContainer = styled.section`
  display: flex;
  height: 350px;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) => props.theme.pink};
  margin-top: 60px;

  img {
    width: 400px;
    height: 100%;
    object-fit: cover;
  }

  div {
    font-size: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }

  strong {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 750px) {
    img {
      width: 300px;
    }
  }
  @media (max-width: 665px) {
    img {
      width: 200px;
    }
  }
  @media (max-width: 550px) {
    flex-direction: column;
    height: auto;
    margin-top: 10px;
    img {
      width: 100%;
      height: 200px;
    }
  }
`;

export const RecipeIngredients = styled.ul`
  font-size: 22px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-left: 20px;

  li::marker,
  strong {
    color: ${(props) => props.theme.green};
  }
`;

export const RecipePageHeader = styled(PageHeader)`
  @media (max-width: 550px) {
    h1 {
      font-size: 30px;
      text-align: center;
    }
  }
`;
