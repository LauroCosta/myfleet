import dayjs from "dayjs";
import { useHistory } from "react-router-dom";
import back from "../../assets/images/back.svg";
import { Button } from "../../components/Button";
import { ConfirmDeleteModal } from "../../components/ConfirmDeleteModal";
//import { Footer } from "../../components/Footer";
import { useExpense } from "../../contexts/ExpenseContext";
import { Container } from "./style";

export function ExpenseDetail() {

  const { expenseSelected, setConfirmDelete } = useExpense();
  const history = useHistory();

  function handleBack() {
    history.goBack();
  }

  return (
    <Container>

      <header>
        <button onClick={handleBack}><img src={back} alt="Voltar" /></button>
      </header>
      <div className="info" >
        <span>Descrição:</span>
        <h1>{expenseSelected?.description}</h1>
        <span>Local:</span>
        <h1>{expenseSelected?.locale}</h1>
        <span>Data:</span>
        <h1>{dayjs(expenseSelected?.createdAt).format('DD-MM-YY HH:m')}</h1>

        <span>Valor:</span>
         <h1>{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(Number(expenseSelected?.value))}</h1>
      </div>
      
      <footer>
        <Button onClick={() => setConfirmDelete(true)}>Excluir</Button>
      </footer>
      <ConfirmDeleteModal />
    </Container>
  );
}