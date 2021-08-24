import {useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useVehicle } from "../../contexts/VehicleContext";
import { firebase } from "../../services/firebase";
import { Content } from "./style";

type Vehicle = {
  id: string
  brand: string;
  model: string;
  year: number;
  plate: string;
  type: string;
  color: string;
  mileage: number;
  user: string;
}


export function ChooseVeicle() {

  const history = useHistory();
  const { setVehicleFound, vehicleFound } = useVehicle();


  const [code, setCode] = useState("");
 // const [vehicleFound, setVehicleFound] = useState<Vehicle>();

  function handleClick() {
    var vehicleRef = firebase.database().ref(`vehicles/${code}`);
    vehicleRef.on('value', (vehicle) => {
      const data: Vehicle = vehicle.val();
  
      if (!data) {
        setVehicleFound(undefined);
        return;        
      }

      if (data.user !== "none") {
        setVehicleFound(undefined);
        return;
      }

      setVehicleFound(data);
      history.push('/confirmationVehicle');
    });
  }

  return (
    

      <Content>


        <h1>Informe o código do veiculo</h1>

        <input type="text" onChange={event => setCode(event.target.value)} value={code}/>


        { vehicleFound && <div>{vehicleFound.model}</div>}

        <Button onClick={handleClick}>Prosseguir</Button>
      </Content>
  );
}




  // const [type, setType] = useState("Caminhão");
  // const [brand, setBrand] = useState("Volvo");
  // const [model, setModel] = useState("FA 450");
  // const [year, setYear] = useState("2018");
  // const [plate, setPlate] = useState("ABC2222");
  // const [color, setColor] = useState("Preto");
  // const [mileage, setMileage] = useState(42575);
  // const [user, setUser] = useState("none");
  
  
  // async function handleCreateExpense(event: FormEvent) {
  //   event.preventDefault();
  //   const expenseRef = database.ref('vehicles');
  
  //   await expenseRef.push({
  //     brand: brand,
  //     model: model,
  //     year: year,
  //     plate: plate,
  //     type: type,
  //     color: color,
  //     mileage: mileage,
  //     user: user
  //   });
  
  // }