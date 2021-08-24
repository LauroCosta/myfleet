import Animation from "react-lottie";

import googleIconImg from "../../assets/images/google-icon.svg"
import logoApp from "../../assets/images/logo.svg";
import animation from "../../assets/animations/truck.json";
import { Content } from "./style";
import { useAuth } from "../../hooks/useAuth";

export const DEFAULT_OPTIONS = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }

}

export function Home() {

  const { signInWithGoogle} = useAuth();

  return (

    <Content>

      <div className="banner">

        <img src={logoApp} alt="logo" />

        <h2>Gerencia a frota de sua empresa</h2>

        <span>Tudo em um só lugar</span>

        <div className="animation">
          <Animation options={DEFAULT_OPTIONS} height={260} width={260}/>
        </div>
      </div>

      <footer>
        <button className="loginGoogle" onClick={signInWithGoogle}>
          <img src={googleIconImg} alt="Logo do Google" />
          Entre com sua conta Google

        </button>
      </footer>
    </Content>


  );
}