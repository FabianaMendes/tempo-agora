import React, { useEffect } from 'react';

import { Container, Tag, Deg,CityInfo, City, Location } from './styles';

import ChevronIcon from '../../assets/chevron-right.svg';
import { searchTemperature } from '../../api';
import { useState } from 'react';
import { Data, Results } from '../../types';

type Props = {
  city: string;
  local: string;
  uf: string;
  temp: any;
  onPress(): void;
}

export default function ListCard({ city, local, uf, temp, onPress }:Props) {

  return (
    <Container onPress={onPress} >
      <Tag/>
      <Deg>{temp}°</Deg>
      <CityInfo>
        <City>{city}</City>
        <Location>{local}</Location>
      </CityInfo>
      <ChevronIcon style={{marginRight: 15}}/>
    </Container>
  );
}