import React from 'react';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import { Container, Scroller, Button, ButtonText } from './styles';

export default function DeleteCity() {
    return(
        <Container>
            <Scroller>
                <Header showIcon title="São Paulo" subtitle="" />

                <InfoCard cep="01400-200" address="Av. Paulista" UF="SP" />

                <Button>
                    <ButtonText>Excluir</ButtonText>
                </Button>
            </Scroller>
        </Container>
    );
}