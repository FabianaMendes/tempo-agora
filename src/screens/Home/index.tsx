import React, { useState } from 'react';
import { RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Scroller, ListContainer, AddButtonContainer, AddButton, AddButtonText } from './styles';

import Header from '../../components/Header';
import ListCard from '../../components/ListCard';

import AddIcon from '../../assets/add.svg';


export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  const onRefresh = () => {
    setRefreshing(false);
  }

  const handleNewCity = () => {
    navigation.navigate('NewCity');
  }

  const handleDeleteCity = () => {
    navigation.navigate('DeleteCity');
  }

  return (
    <Container>
      <Scroller refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      }>
        <Header showIcon={false} title="Tempo Agora" subtitle="Ultima atualização: 10/04/2002 14:50" />
          
        <ListContainer>
          <ListCard deg="21" city="São Paulo" local="Avenida Paulista" onPress={handleDeleteCity}/>
          <ListCard deg="14" city="Curitiba" local="Av. das Flores" onPress={handleDeleteCity}/>
        </ListContainer>
        <AddButtonContainer onPress={handleNewCity}>
          <AddButton><AddIcon/></AddButton>
          <AddButtonText>INCLUIR NOVA CIDADE</AddButtonText>
        </AddButtonContainer>
      </Scroller>
    </Container>
  );
}