import { Switch } from "react-router-dom";
import { ChooseVeicle } from "../pages/ChooseVehicle";
import { ConfirmationVehicle } from "../pages/ConfirmationVehicle";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Mileage } from "../pages/Mileage";
import { Profile } from "../pages/Profile";
import { Vehicle } from "../pages/Vehicle";
import Route from "./Route";

export function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate/>
      <Route path="/vehicle" component={Vehicle} isPrivate/>
      <Route path="/mileage" component={Mileage} isPrivate />
      <Route path="/choose" component={ChooseVeicle} isPrivate/>
      <Route path="/confirmationVehicle" component={ConfirmationVehicle} isPrivate/>
    </Switch>
  )
}
