import { ContainerScreen } from "../../components/ContainerBox/style";
import { Footer } from "../../components/Footer";
import { ItemList } from "../../components/ItemList";
import { useAuth } from "../../hooks/useAuth";


import { Content} from "./style";

type Item = {
  description: string;
  type: string;
  value: number;
  locale: string;
  img: string;
  date: Date;
}

export function Dashboard() {

  const { user } = useAuth();


  return (

    <ContainerScreen>
      <Content>

        <header>
          <div className="profile">
            <h1>{user?.name}</h1>
            <img src={user?.avatar} alt="avatar" />
          </div>

        </header>

        <section>
          <h1>Últimas despesas</h1>
        </section>
      </Content>
    </ContainerScreen>
  );
}