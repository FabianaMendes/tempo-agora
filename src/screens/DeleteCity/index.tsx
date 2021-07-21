import React from 'react';
import Header from '../../components/Header';
import InfoCard from '../../components/InfoCard';
import { CepLocation, Cities } from '../../types';
import { Container, Scroller, Button, ButtonText } from './styles';

type Props = {
    route: {
        params: {
            item: Cities;
        }
    }
}

export default function DeleteCity({ route }: Props) {
    const { item } = route.params;

    return(
        <Container>
            <Scroller>
                <Header showIcon title={item.city} subtitle="" />

                <InfoCard cep={item.cep} address={item.logradouro} UF={item.uf} />

                <Button>
                    <ButtonText>Excluir</ButtonText>
                </Button>
            </Scroller>
        </Container>
    );
}