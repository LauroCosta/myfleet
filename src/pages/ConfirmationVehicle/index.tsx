import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { useVehicle } from "../../contexts/VehicleContext";
import { Container } from "./style";

// type Vehicle = {
//   id: string
//   brand: string;
//   model: string;
//   type: string;
//   year: number;
//   plate: string;
//   color: string;
//   mileage: number;
//   user: string;
// }


export function ConfirmationVehicle() {

  const { vehicleFound, setVehicleFound } = useVehicle();
  // const [code] = useState("");
  const history = useHistory();

  console.log(vehicleFound);

  function handleBack() {
    setVehicleFound(undefined);
    history.push("/choose");
  }

  // function handleClick() {
  //   var vehicleRef = firebase.database().ref(`vehicles/${code}`);
  //   vehicleRef.on('value', (vehicle) => {
  //     const data: Vehicle = vehicle.val();

  //     if (!data) {
  //       setVehicleFound(undefined);
  //       return;
  //     }

  //     if (data.user !== "none") {
  //       setVehicleFound(undefined);
  //       return;
  //     }


  //     setVehicleFound(data);
  //     console.log(vehicleFound);
  //   });
  // }

  return (

    <Container>

      <button onClick={handleBack}>Voltar</button>

      <span>Tipo:</span>
      <strong>{vehicleFound?.type}</strong>
      <span>Modelo:</span>
      <strong>{vehicleFound?.model}</strong>
      <span>Marca:</span>
      <strong>{vehicleFound?.brand}</strong>
      <span>Ano:</span>
      <strong>{vehicleFound?.year}</strong>
      <span>Placa:</span>
      <strong>{vehicleFound?.plate}</strong>
      <span>Cor:</span>
      <strong>{vehicleFound?.color}</strong>
      

      <Button>Confirmar</Button>
    </Container>
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