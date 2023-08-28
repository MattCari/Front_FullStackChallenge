import { LoginForm } from "../../Forms/loginForm/loginform";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { StyledHomeMain } from "../../components/homeBody/styledHomeMain";
import { StyledHomeBody } from "../../styles/bodyHome";
import Logo from "../../assets/Logo.png"



export const Home = () => {
  return (
    <>
      <Header />
      <StyledHomeBody>
        <aside>
          <LoginForm />
        </aside>
        <StyledHomeMain>
          <div className="img_container">
          <img src={Logo} alt="" />
          </div>
        </StyledHomeMain>
      </StyledHomeBody>
      <Footer />
    </>
  );
};
