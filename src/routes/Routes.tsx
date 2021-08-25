import { Route, Switch } from "react-router-dom";
import { ChooseVeicle } from "../pages/ChooseVehicle";
import { ConfirmationVehicle } from "../pages/ConfirmationVehicle";
import { Dashboard } from "../pages/Dashboard";
import { ExpenseDetail } from "../pages/ExpenseDetail";
import { Home } from "../pages/Home";
import { Mileage } from "../pages/Mileage";
import { Profile } from "../pages/Profile";
import { Vehicle } from "../pages/Vehicle";
//import Route from "./Route";

export function Routes(){

  // const { signed } = useAuth();

  // const history = useHistory();
  // useEffect(() => {
    
  //   if (signed) {
  //     history.push("/dashboard");

  //   }else{
  //     history.push("/");

  //   }

  // } , [signed]);



  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard}  />
      <Route path="/profile" component={Profile} />
      <Route path="/vehicle" component={Vehicle} />
      <Route path="/mileage" component={Mileage}  />
      <Route path="/choose" component={ChooseVeicle} />
      <Route path="/confirmationVehicle" component={ConfirmationVehicle} />
      <Route path="/detail" component={ExpenseDetail} />
    </Switch>
  )
}
