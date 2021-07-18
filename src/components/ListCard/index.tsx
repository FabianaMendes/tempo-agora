import React from 'react';

import { Container, Tag, Deg,CityInfo, City, Location } from './styles';

import ChevronIcon from '../../assets/chevron-right.svg';

type Props = {
  deg: string;
  city: string;
  local: string;
  onPress(): void;
}

export default function ListCard({ deg, city, local, onPress }:Props) {
  return (
    <Container onPress={onPress}>
      <Tag/>
      <Deg>{deg}°</Deg>
      <CityInfo>
        <City>{city}</City>
        <Location>{local}</Location>
      </CityInfo>
      <ChevronIcon style={{marginRight: 15}}/>
    </Container>
  );
}