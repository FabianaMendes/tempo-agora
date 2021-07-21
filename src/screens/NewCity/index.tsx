import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { searchCep } from '../../api';
import { CepLocation } from '../../types';
import { useCeps } from '../../contexts/UserContext';

import { Container, Scroller, Title, InputArea, Input, Button, ButtonText, LoadingArea, LoadingIcon } from './styles';

import Header from '../../components/Header';


export default function NewCity() {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const { cepsList } = useCeps();
  const [data, setData] = useState<CepLocation[]>(cepsList);
  const { setNewCeps } = useCeps();
  const navigation = useNavigation();


  const handleOnPress = async (cep: string) => {
    setLoading(true);
    try {
      const cityData = await searchCep(cep);
      const response = await cityData;
      setNewCeps([...data, response.data]);
      //console.log('NewCity.data ==>' + (data), 'NewCity.response searchCep ==>' + response.data);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Oops!', 'Este cep não foi encontrado na base de dados. Verifique e tente novamente!');
      console.log(error.message);
    }
     setLoading(false);
  }


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

        <LoadingArea>
          {loading &&
            <LoadingIcon size="large" color="#000" />
          }
        </LoadingArea>

        <Button onPress={() => handleOnPress(cep)}>
          <ButtonText>Salvar</ButtonText>
        </Button>

      </Scroller>
    </Container>
  );
}