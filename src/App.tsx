import { BrowserRouter, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from './pages/Profile';
import { Vehicle } from './pages/Vehicle';
import { Mileage } from "./pages/Mileage";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ExpenseContextProvider } from "./contexts/ExpenseContext";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <ExpenseContextProvider>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/vehicle" component={Vehicle} />
          <Route path="/mileage" component={Mileage} />
        </ExpenseContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
