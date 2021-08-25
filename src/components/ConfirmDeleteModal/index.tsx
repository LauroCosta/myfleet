import { useExpense } from "../../contexts/ExpenseContext";
import { Section } from "./style";
import { Button } from "../Button";
import { database } from "../../services/firebase";
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';


export function ConfirmDeleteModal() {

  const {

    confirmDelete,
    setConfirmDelete,
    expenseSelected,

  } = useExpense();

  const history = useHistory();

  function handleDelete() {
    const expenseRef = database.ref('expenses/'+expenseSelected?.id);
    expenseRef.remove()
    history.push("/dashboard");
    setConfirmDelete(false);

    toast.success('Excluído com sucesso!', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });

  }

  return (
    <>
      {confirmDelete &&

        <Section>
          <div className="content">
            <h1>Tem certeza que deseja excluir ?</h1>
            <div className="buttons">
              <Button onClick={() => setConfirmDelete(false)}>Não</Button>
              <Button onClick={handleDelete}>Sim</Button>
            </div>


          </div>
        </Section>
      }
    </>
  );
}