import {
  HomeContainer,
  HomeContentContainer,
  HomeHeaderContainer,
} from "./styles";
import logo from "../../assets/Logo.svg";
import homeimg from "../../assets/home-img.svg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <HomeContainer>
      <HomeHeaderContainer>
        <img src={logo} alt="logo recipes" />
        <Link to="/recipes">GO TO RECIPES</Link>
      </HomeHeaderContainer>
      <HomeContentContainer>
        <div>
          <h1>Easy & Smart Recipes</h1>
          <p>
            Spend less time looking for the recipe you want. Here you will find
            diversity in recipes. No more repeating the same food every day. So,
            shall we cook?
          </p>
        </div>
        <img src={homeimg} alt="girl cooking" />
      </HomeContentContainer>
    </HomeContainer>
  );
}
