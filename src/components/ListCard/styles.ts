import React from 'react';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: #FFF;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
    margin-bottom: 15px;
    border-radius: 5px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Tag = styled.View`
    background-color: #BA49D7;
    width: 5px;
    height: 65px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`;

export const Deg = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 26px;
    color: #6E7277;
    margin: 0 15px 0 10px;
`;

export const CityInfo = styled.View`
    flex: 1;
`;

export const City = styled.Text`
    font-family: 'Poppins_600SemiBold';
    font-size: 14px;
    color: #6E7277;
`;

export const Location = styled.Text`
    font-family: 'Poppins_500Medium';
    font-size: 12px;
    color: #C8C8C8;
`;