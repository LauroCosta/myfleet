
import { Button } from "../../components/Button";
import { ConfirmVehicleModal } from "../../components/ConfirmVehicleModal";
import { useVehicle } from "../../contexts/VehicleContext";
import { firebase } from "../../services/firebase";
import { Content } from "./style";
import { toast } from 'react-toastify';


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

  const { setVehicleFound, setConfirmVehicle, code, setCode } = useVehicle();


 // const [vehicleFound, setVehicleFound] = useState<Vehicle>();

  function handleClick() {

    var vehicleRef = firebase.database().ref(`vehicles/${code}`);
    vehicleRef.on('value', (vehicle) => {
      const data: Vehicle = vehicle.val();
  
      if (!data) {
        setVehicleFound(undefined);
        toast.error('Código inválido!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          
        return;        
      }

      if (data.user !== "none") {
        setVehicleFound(undefined);

        toast.warn('Veículo não disponível!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
          
        return;
      }

      setVehicleFound(data);
      setConfirmVehicle(true);

    });
  }

  return (
      <Content>
        <h1>Cole o código do veículo fornecido pela empresa</h1>
        <input type="text" onChange={event => setCode(event.target.value)} value={code}/>
        <footer>
          <Button onClick={handleClick}>Prosseguir</Button>
        </footer>
        <ConfirmVehicleModal />
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