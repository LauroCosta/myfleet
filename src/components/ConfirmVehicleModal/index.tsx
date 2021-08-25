import { Section } from "./style";
import { Button } from "../Button";
import { database} from "../../services/firebase";
import { useHistory } from "react-router-dom";
import { useVehicle } from "../../contexts/VehicleContext";
import { useAuth } from "../../hooks/useAuth";

export function ConfirmVehicleModal() {
  
  const {
    vehicleFound,
    confirmVehicle,
    setConfirmVehicle,
    code,

  } = useVehicle();
  
  const { user } = useAuth();

  const history = useHistory();

  async function handleConfirmVehicle() {
    alert(vehicleFound?.id);
    await database.ref(`vehicles/${code}`).update({
      user: user?.id,
    });

    history.push('/dashboard');
  }


  // async function handleonfirmVehicle() {
  //   alert(vehicleFound?.id);
  //  const test = await database.ref(`vehicles/`).equalTo(user).once("value");

  //   history.push('/dashboard');
  // }
  return (
    <>
      {confirmVehicle &&

        <Section>
          <div className="content">
            <h1>Tem certeza que deseja selecionar esse veículo ?</h1>

            <div className="vehicle">
              <span>Tipo: {vehicleFound?.type}</span>
              <span>Modelo: {vehicleFound?.model}</span>
              <span>Marca: {vehicleFound?.brand}</span>
              <span>Ano: {vehicleFound?.year}</span>
              <span>Placa: {vehicleFound?.plate}</span>
              <span>Cor: {vehicleFound?.color}</span>
  
            </div>
      
            <div className="buttons">
              <Button onClick={() => setConfirmVehicle(false)}>Não</Button>
              <Button onClick={handleConfirmVehicle} >Sim</Button>
            </div>
          </div>
        </Section>
      }
    </>
  );
}