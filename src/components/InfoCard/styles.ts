import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #FFF;
    border-radius: 8px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);

    padding: 20px 25px;
`;

export const Infos = styled.View`
    flex-direction: row;
    justify-content: space-between;
    flex: 1;
    margin: 8px 0;
`;

export const Title = styled.Text`
    font-size: 14px;
    font-family: 'Poppins_500Medium';
    color: #C8C8C8;
`;

export const Info = styled.Text`
    font-size: 14px;
    font-family: 'Poppins_600SemiBold';
    color: #6E7277;
    max-width: 165px;
`;
