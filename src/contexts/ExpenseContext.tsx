import React, { createContext, ReactNode, useContext, useState } from "react";

type ExpenseContextData = {
  isOpen: boolean;
  confirmDelete: boolean;
  setConfirmDelete: (value: boolean) => void;
  openModal: () => void;
  closeModal: () => void;
  description: string;
  locale: string;
  value: number;
  setDescription: (description: string) => void;
  setValue: (value: number) => void;
  setLocale: (locale: string) => void;
  reset: () => void;
  setExpenseSelected: (expense: Expense | undefined) => void;
  expenseSelected: Expense | undefined;
}

type Expense = {
  id: string;
  description: string;
  value: number;
  locale: string;
  userId: string;
  createdAt: string;
};

export const ExpenseContext = createContext({} as ExpenseContextData);

type ExpenseContextProviderProps = {
  children: ReactNode;
}

export function ExpenseContextProvider({ children }: ExpenseContextProviderProps) {

  const [isOpen, setIsOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [description, setDescription] = useState("");
  const [locale, setLocale] = useState("");
  const [value, setValue] = useState(0);
  const [expenseSelected, setExpenseSelected] = useState<Expense>();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    reset();
    setIsOpen(false);
  }

  function reset() {
    setDescription("");
    setLocale("");
    setValue(0);

  }

  return (
    <ExpenseContext.Provider 
      value={{
        isOpen,
        closeModal,
        openModal,
        description,
        locale,
        value,
        setDescription,
        setValue,
        setLocale,
        reset,
        expenseSelected,
        setExpenseSelected,
        setConfirmDelete,
        confirmDelete
      }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpense = () => {
  return useContext(ExpenseContext);
}