import { Footer } from "../../components/Footer";
import { ExpenseList } from "../../components/ItemList";
import { useAuth } from "../../hooks/useAuth";

import { Content } from "./style";

export function Dashboard() {

  const { user } = useAuth();
  
  
  // useEffect(() => {
    
  //   if (!user) {
  //     history.push("/");
  //   }
  // }, [])

  
  return (

    <Content>
      <header>
        <div className="profile">
          <h1>{user?.name}</h1>
          <img src={user?.avatar} alt="avatar" />
        </div>

      </header>
      <h1>Últimas despesas</h1>
      <section>
        <ExpenseList />
      </section>

      <Footer />
    </Content>
  );
}