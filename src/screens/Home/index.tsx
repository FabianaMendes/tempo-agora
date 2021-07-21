import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { City } from '../../types';

import { Container, Scroller, ListContainer, AddButtonContainer, AddButton, AddButtonText } from './styles';

import Header from '../../components/Header';
import ListCard from '../../components/ListCard';

import AddIcon from '../../assets/add.svg';
import { searchTemperature } from '../../api';


export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState<City[]>([]);

  const navigation = useNavigation();

  const listOfCeps = [
    {
      bairro: "Dona Diva",
      cep: "38748-472",
      complemento: "",
      ddd: "34",
      gia: "",
      ibge: "3148103",
      localidade: "Patrocínio",
      logradouro: "Rua Cesário Alvim",
      siafi: "4961",
      uf: "MG"
    },
    {
      bairro: "Leme",
      cep: "38748-000",
      complemento: "",
      ddd: "21",
      gia: "",
      ibge: "3148103",
      localidade: "Rio de Janeiro",
      logradouro: "Rua Ipanema",
      siafi: "4961",
      uf: "RJ"
    },
    {
      bairro: "Centro",
      cep: "38748-472",
      complemento: "",
      ddd: "51",
      gia: "",
      ibge: "3148103",
      localidade: "Porto Alegre",
      logradouro: "Av Ipês",
      siafi: "4961",
      uf: "RS"
    }
  ]

  const dateAndTime = () => {
    let now = new Date();
    let day = (now.getDate()).toString().padStart(2, '0');
    let month = (now.getMonth()+1).toString().padStart(2, '0');
    let year = now.getFullYear();
    let newHour = (now.getHours()).toString().padStart(2, '0');
    let newMinutes = (now.getMinutes()).toString().padStart(2, '0');
    setDate(`${day}/${month}/${year}`);
    setHour(`${newHour}:${newMinutes}`);
  }

  const onRefresh = async() => {
    dateAndTime();
    await citiesData();
    setRefreshing(false);
  }
  
  const citiesData = async () => {
    data.length=0;
    setData(data);
  
    let index = 1;
    for (const element of listOfCeps) {
      let temp = 0;
      try {
        const temperature = await searchTemperature(element.localidade, element.uf);
        const response = await temperature;
        temp = (response.data.results.temp);
        console.log('temp ==>' + temp)
  
        const { localidade, uf, cep, logradouro } = element;
  
        const cityData = {
          index,
          temp,
          city: localidade,
          uf,
          cep,
          logradouro
        }
        console.log("citiesData => test => " + JSON.stringify([cityData]));

        setData(previous => [...previous, cityData]);
        console.log("citiesData => DATA => " + JSON.stringify([...data]));
  
      } catch(error) {
        console.log("Erro" + error.message);
      }
      index++
    }
  }
  
  const handleNewCity = () => {
    navigation.navigate('NewCity');
  }

  const handleDeleteCity = (item: City) => {
    navigation.navigate('DeleteCity', {item});
  }

  useEffect(() => {
    (async () => {
      dateAndTime();
      await citiesData();
    })();  
  }, []);


  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }>
        <Header showIcon={false} title="Tempo Agora" subtitle={`Ultima atualização: ${date}  ${hour}`} />
          
        <ListContainer>
          {data.length === listOfCeps.length && data.map((item, i)=> (
            <ListCard 
              key={i} 
              uf={item.uf}
              city={item.city} 
              local={item.logradouro} 
              onPress={() => handleDeleteCity(item)}
              temp={item.temp}
            />
          ))}
        </ListContainer>
        <AddButtonContainer onPress={handleNewCity}>
          <AddButton><AddIcon/></AddButton>
          <AddButtonText>INCLUIR NOVA CIDADE</AddButtonText>
        </AddButtonContainer>
      </Scroller>
    </Container>
  );
}