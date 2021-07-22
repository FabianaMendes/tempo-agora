import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useCeps } from '../../contexts/UserContext';
import { City } from '../../types';

import { Container, Scroller, Button, ButtonText } from './styles';

import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';

type Props = {
  route: {
    params: {
      item: City;
    }
  }
}

export default function DeleteCity({ route }: Props) {
  const { item } = route.params;
  const { deleteCep } = useCeps();
  const { cepsList } = useCeps();
  const navigation = useNavigation();


  const handleDeleteCity = (cep: string) => {
    deleteCep(cep, cepsList);
    navigation.navigate('Home');
  }

  return (
    <Container>
      <Scroller>

        <Header showIcon title={item.city} subtitle="" />

        <InfoCard cep={item.cep} address={item.logradouro} UF={item.uf} />

        <Button onPress={() => { handleDeleteCity(item.cep) }}>
          <ButtonText>Excluir</ButtonText>
        </Button>

      </Scroller>
    </Container>
  );
}