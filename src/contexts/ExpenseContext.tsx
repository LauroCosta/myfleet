import React, { createContext, ReactNode, useContext, useState } from "react";

type ExpenseContextData = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  description: string;
  locale: string;
  value: number;
  setDescription: (description: string) => void;
  setValue: (value: number) => void;
  setLocale: (locale: string) => void;
  reset: () => void;
}

export const ExpenseContext = createContext({} as ExpenseContextData);

type ExpenseContextProviderProps = {
  children: ReactNode;
}

export function ExpenseContextProvider({ children }: ExpenseContextProviderProps) {

  const [isOpen, setIsOpen] = useState(false);

  const [description, setDescription] = useState("");
  const [locale, setLocale] = useState("");
  const [value, setValue] = useState(0);

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

      }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpense = () => {
  return useContext(ExpenseContext);
}