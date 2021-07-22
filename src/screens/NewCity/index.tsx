import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { searchCep } from '../../api';
import { CepLocation } from '../../types';
import { useCeps } from '../../contexts/UserContext';

import { Container, Scroller, Title, InputArea, Input, ErrorMessage, Button, ButtonText, LoadingArea, LoadingIcon } from './styles';

import Header from '../../components/Header';


export default function NewCity() {
  const { cepsList } = useCeps();
  const { setNewCeps } = useCeps();
  const navigation = useNavigation();
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<CepLocation[]>(cepsList);
  const [errorMessage, setErrorMessage] = useState('');


  const validateCep = () => {
    let error = false;
    setErrorMessage('');
    const cepRegex = RegExp(/^[0-9]{8}/);
    if (!cepRegex.test(cep)) {
      setErrorMessage("Digite apenas números. Letras e caracteres não são válidos.");
      error = true;
    }
    if (cep.length < 8 || cep.length > 8) {
      setErrorMessage("Cep deve conter 8 dígitos.");
      error = true;
    }
    return !error;
  }


  const handleOnPress = async (cep: string) => {
    setLoading(true);
    try {
      const cityData = await searchCep(cep);
      const response = await cityData;
      setNewCeps([...data, response.data]);
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

        <Header showIcon title="Nova Cidade" subtitle="" />

        <Title>Digite o Cep da cidade</Title>

        <InputArea>
          <Input
            placeholder="00000-000"
            value={cep}
            onChangeText={(text) => setCep(text)}
          />
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </InputArea>

        <LoadingArea>
          {loading &&
            <LoadingIcon size="large" color="#000" />
          }
        </LoadingArea>

        <Button
          onPress={() => {
            validateCep();
            if (validateCep()) {
              handleOnPress(cep);
            }
        }}>
          <ButtonText>Salvar</ButtonText>
        </Button>

      </Scroller>
    </Container>
  );
}