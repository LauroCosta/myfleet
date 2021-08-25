import { BrowserRouter } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { ExpenseContextProvider } from "./contexts/ExpenseContext";
import { AddExpenseModal } from "./components/AddExpenseModal";
import { ContainerScreen } from "./components/ContainerBox/style";
import { Routes } from "./routes/Routes";
import { VehicleContextProvider } from "./contexts/VehicleContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ContainerScreen>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
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
