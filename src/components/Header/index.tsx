import React from 'react';

import { Container } from './styles';

type Props = {
  children: any;
}

const Header = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
);

export default Header;