import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';
import { Alert } from 'react-native';
import { searchCep } from '../../api';
import Header from '../../components/Header';

import { Container, Scroller, Title, InputArea, Input, Button, ButtonText, LoadingIcon } from './styles';


export default function NewCity() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<[]>([]);


  const handleOnPress = (cep: string) => {
    setLoading(true)
    searchCep(cep)
      .then((response) => {
        setData(response.data)
        console.log(data)
      })
      .catch(() => Alert.alert('Oops! Este cep não foi encontrado na base de dados. Verifique e tente novamente!'))
      .finally(() => setLoading(false))
  }

  //const setNewCep = async (data: []) => {
  //  try {
  //    await AsyncStorage.setItem('ceps', JSON.stringify(data));
  //  } catch (e) {
  //    console.log(e.message);
  //  }
  //}


  return (
    <Container>
      <Scroller>
        <Header showIcon title="Nova Cidade" subtitle="." />

        <Title>Digite o Cep da cidade</Title>

        <InputArea>
          <Input
            placeholder="00000-000"
            onChangeText={(text) => setCep(text)}
          />
        </InputArea>

        {loading &&
          <LoadingIcon size="large" color="#FFF" />
        }

        <Button onPress={() => handleOnPress(cep)}>
          <ButtonText>Salvar</ButtonText>
        </Button>

      </Scroller>
    </Container>
  );
}