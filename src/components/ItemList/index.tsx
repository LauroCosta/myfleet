import { Container } from "./style"
import day from 'dayjs';
import { useState, useEffect } from 'react';

import { database, firebase } from '../../services/firebase';
import { useHistory } from "react-router-dom";
import { useExpense } from "../../contexts/ExpenseContext";
import { useAuth } from "../../hooks/useAuth";

type ExpensesData = Record<string, {
  description: string;
  value: number;
  locale: string;
  userId: string;
  createdAt: string;
}>

type Expenses = {
  id: string;
  description: string;
  value: number;
  locale: string;
  userId: string;
  createdAt: string;
};

export function ExpenseList() {

  const { setExpenseSelected } = useExpense();
  const history = useHistory();
  const [expenses, setExpenses] = useState<Expenses[]>([]);
  const { user } =  useAuth();
 
  function filterMyId(value: Expenses) {
    if (value.userId === user?.id) {
      return value;
    }
    return;
  }

  function toggleItem(expense: Expenses) {
    console.log(expense);
    setExpenseSelected(expense);
    history.push('/detail');
  }

  // function teste(){
  //   var ref = firebase.database().ref("expenses");
  //   ref.orderByChild("userId").equalTo(String(user?.id)).on("child_added", function (snapshot) {
  //     console.log(snapshot.key);
  //   });
  // }

  useEffect(() => {
    const expensesRef = database.ref(`expenses/${user?.id}`);

    expensesRef.on('value', (expense) => {
      const databaseExpense = expense.val();

      const firebaseExpenses: ExpensesData = databaseExpense ?? {};

      const parsedExpenses = Object.entries(firebaseExpenses).map(
        ([key, value]) => {
          return {
            id: key,
            description: value.description,
            value: value.value,
            locale: value.locale,
            userId: value.userId,
            createdAt: value.createdAt
          };
        }
      );
      
      setExpenses(parsedExpenses.reverse());
    });
  }, []);

  return (
    <>
    
      {expenses.map((expense) => {
        return (
          <Container key={expense.id} onClick={() => toggleItem(expense)}>
            <div className="info" key={expense.id}>
              <h1>{expense.description}</h1>
              <h2>{expense.locale}</h2>
              <strong>{day(expense.createdAt).format('DD-MM-YY HH:mm')}</strong>

            </div>
            <h1 className="price">{new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }).format(expense.value)}</h1>

          </Container>
        );
      })}
    </>
  );
}
