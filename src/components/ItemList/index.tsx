import { Container } from "./style"
import day from 'dayjs';
import { useState, useEffect } from 'react';

import { database } from '../../services/firebase';

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

  const [expenses, setExpenses] = useState<Expenses[]>([]);

  useEffect(() => {
    const expensesRef = database.ref('expenses').orderByChild('createdAt');

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

      // console.log(parsedExpenses);
      // var filtrado = expenses.filter(function(obj) { return (obj.userId === user?.id) });

      // setExpenses(filtrado);
      // console.log(filtrado);
      // console.log(user?.id);
    });
  }, []);

  return (
    <>
      {expenses.map((expense) => {
        return (
          <Container key={expense.id}>
            <div className="info" >
              <h1>{expense.description}</h1>
              <h2>{expense.locale}</h2>
              <strong>{day(expense.createdAt).format('DD-MM-YY HH:m')}</strong>

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
