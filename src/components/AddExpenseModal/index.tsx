import { useExpense } from "../../contexts/ExpenseContext";
import close from "../../assets/images/close.svg";
import { Section } from "./style";

export function AddExpenseModal() {

  const {
    isOpen,
    closeModal,
  } = useExpense();

  return (

    <>
      {isOpen &&

        <Section>
          <div className="content">
            <h1>Nova despesa</h1>

            <button onClick={closeModal}><img src={close} alt="Fechar" /></button>

          </div>

        </Section>
      }
    </>
  );
}