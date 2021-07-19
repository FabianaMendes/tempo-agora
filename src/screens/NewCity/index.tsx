import React from 'react';
import Header from '../../components/Header';

import { Container, Scroller, Title, InputArea, Input, Button, ButtonText } from './styles';

export default function NewCity() {
    return(
        <Container>
            <Scroller>
                <Header showIcon title="Nova Cidade" subtitle="." />

                <Title>Digite o Cep da cidade</Title>

                <InputArea>
                    <Input placeholder="00000-000"/>
                </InputArea>

                <Button>
                    <ButtonText>Salvar</ButtonText>
                </Button>

            </Scroller>
        </Container>
    );
}