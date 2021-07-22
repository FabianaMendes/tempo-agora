import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { City } from '../../types';
import { useCeps } from '../../contexts/UserContext';
import { searchTemperature } from '../../api';

import { Container, Scroller, ListContainer, AddButtonContainer, AddButton, AddButtonText } from './styles';

import Header from '../../components/Header';
import ListCard from '../../components/ListCard';

import AddIcon from '../../assets/add.svg';


export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const [data, setData] = useState<City[]>([]);
  const { cepsList } = useCeps();
  const navigation = useNavigation();


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
    setRefreshing(true);
    dateAndTime();
    await citiesData();
    setRefreshing(false);
    console.log('Cepslist home =>'+cepsList); 
    //console.log('CepsList - Home ==>' + cepsList);
  }
  
  const citiesData = async () => {
    data.length=0;
    setData(data);
  
    let index = 1;
    for (const element of cepsList) {
      let temp = 0;
      try {
        const temperature = await searchTemperature(element.localidade, element.uf);
        const response = await temperature;
        temp = (response.data.results.temp);
        //console.log('temp ==>' + temp)
  
        const { localidade, uf, cep, logradouro } = element;
  
        const cityData = {
          index,
          temp,
          city: localidade,
          uf,
          cep,
          logradouro
        }
        //console.log("citiesData => test => " + JSON.stringify([cityData]));

        setData(previous => [...previous, cityData]);
        //console.log("citiesData => DATA => " + JSON.stringify([...data]));
  
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
      //console.log('cepslist home' + cepsList);
    })();  
  }, [cepsList]);


  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }>
        <Header showIcon={false} title="Tempo Agora" subtitle={`Ultima atualização: ${date}  ${hour}`} />
          
        <ListContainer>
          {data.length === cepsList.length && data.map((item, i)=> (
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