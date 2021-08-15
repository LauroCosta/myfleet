import React, { createContext, ReactNode, useContext, useState } from "react";

type ExpenseContextData = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const ExpenseContext = createContext({} as ExpenseContextData);

type ExpenseContextProviderProps = {
  children: ReactNode;
}

export function ExpenseContextProvider({ children }: ExpenseContextProviderProps) {

  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ExpenseContext.Provider 
      value={{
        isOpen,
        closeModal,
        openModal,
      }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpense = () => {
  return useContext(ExpenseContext);
}