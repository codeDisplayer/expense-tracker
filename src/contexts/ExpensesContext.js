import { createContext, useContext, useState } from "react";

const ExpensesContext = createContext();

export const useExpensesContext = () => {
  return useContext(ExpensesContext);
}

export default function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [customCategory, setCustomCategory] = useState([]);
  
  return(
    <ExpensesContext.Provider value={{
      expenses, setExpenses, customCategory, setCustomCategory
    }}>
      {children}
    </ExpensesContext.Provider>
  )
} 