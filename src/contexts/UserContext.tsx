import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import { CepLocation } from "../types";

interface ICepsContext {
  ceps: CepLocation[];
}

type Props = {
  children: any;
}

const CepsContext = createContext<ICepsContext>({} as ICepsContext);

const CepsProvider = ({ children }: Props) => {
  const [ceps, setCeps] = useState<[]>([]);




  const addCep = async (cepInfo: CepLocation) => {
    await AsyncStorage.setItem('Ceps', JSON.stringify(cepInfo))
  }

  return (
    <CepsContext.Provider value={{ ceps }}>
      {children}
    </CepsContext.Provider>
  );
}

function useCeps(): ICepsContext {
  const context = useContext(CepsContext);
  return context;
} 

export { useCeps, CepsProvider };