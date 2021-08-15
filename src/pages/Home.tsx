import { useHistory } from "react-router-dom";

import googleIconImg from "../assets/images/google-icon.svg"
import logoApp from "../assets/images/MyFleet.svg";
import "../styles/home.scss";
import { Button } from "../components/Button";
import { useAuth } from "../hooks/useAuth";

export function Home() {

  const history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function handleLoginGoogle(){
    if(!user) {
      await signInWithGoogle();
    }

    history.push("/dashboard");
  }

  return (

    <div className="container">
     
      <img src={logoApp} alt="Logo MyFleet" className="logo" />
      <h1>Gerenciamento de veículos</h1>

      <Button>teste</Button>
      <footer>
        <button className="loginGoogle" onClick={handleLoginGoogle}>
          <img src={googleIconImg} alt="Logo do Google" />
          Entre com sua conta Google

        </button>
      </footer>
    </div>


  );
}