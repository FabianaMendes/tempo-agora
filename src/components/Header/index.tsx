import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Button, Title, Subtitle } from './styles';

import ChevronIcon from '../../assets/chevron-left.svg';

type Props = {
  showIcon: boolean;
  title: string;
  subtitle: string;
}

const Header = ({ showIcon, title, subtitle }: Props) => {
  const navigation = useNavigation();

  return (
    <Container>
      <Button onPress={() => navigation.navigate('Home')}>{showIcon && <ChevronIcon/>}</Button>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}

export default Header;