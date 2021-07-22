import React, { useEffect, useState } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCeps } from '../../contexts/UserContext';
import { searchTemperature } from '../../api';
import { City } from '../../types';

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
    let today = new Date();
    let day = (today.getDate()).toString().padStart(2, '0');
    let month = (today.getMonth() + 1).toString().padStart(2, '0');
    let year = today.getFullYear();
    let newHour = (today.getHours()).toString().padStart(2, '0');
    let newMinutes = (today.getMinutes()).toString().padStart(2, '0');
    setDate(`${day}/${month}/${year}`);
    setHour(`${newHour}:${newMinutes}`);
  }

  const citiesData = async () => {
    data.length = 0;
    setData(data);

    let index = 1;
    for (const element of cepsList) {
      let temp = 0;
      try {
        const temperature = await searchTemperature(element.localidade, element.uf);
        const response = await temperature;
        temp = (response.data.results.temp);
        const { localidade, uf, cep, logradouro } = element;
        const cityData = {
          index,
          temp,
          city: localidade,
          uf,
          cep,
          logradouro
        }
        setData(previous => [...previous, cityData]);
      } catch (error) {
        console.log("Erro" + error.message);
      }
      index++
    }
  }

  const handleNewCity = () => {
    navigation.navigate('NewCity');
  }

  const handleDeleteCity = (item: City) => {
    navigation.navigate('DeleteCity', { item });
  }

  const onRefresh = async () => {
    setRefreshing(true);
    dateAndTime();
    await citiesData();
    setRefreshing(false);
  }

  useEffect(() => {
    (async () => {
      dateAndTime();
      await citiesData();
    })();
  }, [cepsList]);


  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <Header showIcon={false} title="Tempo Agora" subtitle={`Ultima atualização: ${date}  ${hour}`} />

        <ListContainer>
          {data.length === cepsList.length && data.map((item, i) => (
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
          <AddButton><AddIcon /></AddButton>
          <AddButtonText>INCLUIR NOVA CIDADE</AddButtonText>
        </AddButtonContainer>

      </Scroller>
    </Container>
  );
}