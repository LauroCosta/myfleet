import { Button } from "../../components/Button";
import logout from "../../assets/images/logout.svg";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./style";

export function Profile() {

  const { logOut, user } = useAuth();

  return (
    <Container>
      <header>
        <h1>Perfil</h1>
        <div className="profile">
          <img src={user?.avatar} alt="Foto perfil" />
        </div>

      </header>

      <div className="info">
        <span>Usuário</span>
        <strong>{user?.name}</strong>

        <span>Email</span>
        <strong>{user?.email}</strong>

        <div className="logout">
          <Button onClick={logOut}>
            <img src={logout} alt="Sair" />  
            Sair
          </Button>
        </div>
      </div>

      <Footer />
    </Container>
  );
}