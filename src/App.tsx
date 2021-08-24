import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { ExpenseContextProvider } from "./contexts/ExpenseContext";
import { AddExpenseModal } from "./components/AddExpenseModal";
import { ContainerScreen } from "./components/ContainerBox/style";
import { Routes } from "./routes/Routes";
import { VehicleContextProvider } from "./contexts/VehicleContext";

function App() {
  return (
    <ContainerScreen>
      <BrowserRouter>
        <AuthContextProvider>
          <VehicleContextProvider>
            <ExpenseContextProvider>
              <Routes />
              <AddExpenseModal />
            </ExpenseContextProvider>
          </VehicleContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </ContainerScreen>
  );
}

export default App;
