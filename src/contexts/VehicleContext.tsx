import React, { createContext, ReactNode, useContext, useState } from "react";

type VehicleContextData = {
  vehicleFound: Vehicle | undefined;
  setVehicleFound: (vehicle: Vehicle | undefined) => void;

}
type Vehicle = {
  id: string
  brand: string;
  model: string;
  year: number;
  type: string;
  plate: string;
  color: string;
  mileage: number;
  user: string;
}

export const VehicleContext = createContext({} as VehicleContextData);

type VehicleContextProviderProps = {
  children: ReactNode;
}

export function VehicleContextProvider({ children }: VehicleContextProviderProps) {
  const [vehicleFound, setVehicleFound] = useState<Vehicle>();

  return (
    <VehicleContext.Provider 
      value={{
        vehicleFound,
        setVehicleFound
      }}>
      {children}
    </VehicleContext.Provider>
  );
}

export const useVehicle = () => {
  return useContext(VehicleContext);
}