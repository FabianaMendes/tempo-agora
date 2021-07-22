import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { CepLocation } from "../types";
import { Alert } from "react-native";

interface ICepsContext {
  cepsList: CepLocation[];
  setNewCeps(data: CepLocation[]): void;
  deleteCep(cep: string, cepsList:CepLocation[]): void;
}

const CepsContext = createContext<ICepsContext>({} as ICepsContext);


const CepsProvider: React.FC = ({ children }) => {
  const [cepsList, setCepsList] = useState<CepLocation[]>([]);

  useEffect(() => {
    const checkData = async () => {
        const storagedData = await AsyncStorage.getItem('@tempo-agora:cities');
        if(storagedData) {
          //console.log('StoragedData ==>' + storagedData);
          setCepsList(JSON.parse(storagedData));
        } else {
          //console.log('No data');
          setCepsList([]);
        }
      }
    checkData();
  }, []);


  const setNewCeps = async (data: CepLocation[]) => {
    await AsyncStorage.removeItem('@tempo-agora:cities');

    try {
      await AsyncStorage.setItem('@tempo-agora:cities', JSON.stringify(data));
      setCepsList(data);
      //const storage = await AsyncStorage.getItem('@tempo-agora:cities')
      //console.log('data' + data, 'Storage' + storage);
      Alert.alert('Sucesso', 'Dados gravados com sucesso!');
    } 
    catch (e) {
      Alert.alert('Oops!', 'Ocorreu um erro durante sua solicitação. Tente novamente em alguns instantes.');
      console.log(e.message);
    }
  }


  const deleteCep = async (cep: string, cepsList:CepLocation[]) => {
    await AsyncStorage.removeItem('@tempo-agora:cities');

    const newData = cepsList.filter(item => {
      if(item.cep !== cep) {
        return item;
      } else {
        return null;
      }
    });

    try {
      await AsyncStorage.setItem('@tempo-agora:cities', JSON.stringify(newData));
      setCepsList(newData);
      //const storage = await AsyncStorage.getItem('@tempo-agora:cities')
      //console.log('newData' + newData, 'Storage' + storage);
      Alert.alert('Sucesso', 'Cep removido com sucesso!');
    } 
    catch (e) {
      Alert.alert('Oops!', 'Ocorreu um erro durante sua solicitação. Tente novamente em alguns instantes.');
      console.log(e.message);
    }
  }


  return (
    <CepsContext.Provider value={{ cepsList, setNewCeps, deleteCep }}>
      {children}
    </CepsContext.Provider>
  );
}

function useCeps(): ICepsContext {
  const context = useContext(CepsContext);
  return context;
} 

export { useCeps, CepsProvider };