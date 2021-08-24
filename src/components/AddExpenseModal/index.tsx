import { useExpense } from "../../contexts/ExpenseContext";
import close from "../../assets/images/close.svg";
import { Section } from "./style";
import { FormEvent, useState } from "react";
import { database } from "../../services/firebase";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export function AddExpenseModal() {

  const {
    isOpen,
    closeModal,
    setDescription,
    setLocale,
    setValue,
    description,
    value,
    locale,
    reset
  } = useExpense();

  const { user } = useAuth();

  const history = useHistory();
  const [hasChanged, setHasChanged] = useState(true);
  

  async function handleCreateExpense(event: FormEvent) {
    event.preventDefault();
    const expenseRef = database.ref('expenses');

    await expenseRef.push({
      description: description,
      value: value,
      locale: locale,
      userId: user?.id,
      createdAt: new Date().getTime(),
    });
  
    reset();
    closeModal();
    history.push('/dashboard');
  }

  async function handleCancelExpense(event: FormEvent) {
    event.preventDefault();
    reset();

  }


  return (

    

    <>
      {isOpen &&

        <Section>
          <div className="content">
            <h1>Nova despesa</h1>

            <button className="close" onClick={closeModal}><img src={close} alt="Fechar" /></button>

            <form  onSubmit={handleCreateExpense}>
              <label >Descrição</label>
              <input 
                type="text" 
                onChange={event => setDescription(event.target.value)}
                value={description}
                required 
              />

              <label >Local</label>
              <input 
                type="text" 
                onChange={event => setLocale(event.target.value)}
                value={locale}
                required
              />

              <label >Valor</label>
              <input 
                type="number" 
                onChange={event => {setValue(Number(event.target.value)); setHasChanged(false);} }
                value={value}
                required/>

              <div className="buttons">
                <button 
                  onClick={handleCancelExpense} 
                  className="cancel"
                  disabled={hasChanged}
                >Cancelar
                  
                </button>
                <button 
                  type="submit" 
                  className="save"
                  disabled={hasChanged}
                 >Salvar
                </button>
              </div>
            </form>
          </div>
        </Section>
      }
    </>
  );
}