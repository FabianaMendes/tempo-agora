import React from 'react';

import { Container, Infos, Title, Info } from './styles';

type Props = {
  cep: string;
  address: string;
  UF: string;
}

export default function InfoCard({ cep, address, UF }:Props) {
  return (
    <Container>
      <Infos>
          <Title>CEP</Title><Info>{cep}</Info>
      </Infos>
      <Infos>
          <Title>Endereço</Title><Info>{address}</Info>
      </Infos>
      <Infos>
          <Title>UF</Title><Info>{UF}</Info>
      </Infos>
    </Container>
  );
}