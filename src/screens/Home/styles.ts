import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 30px;
`;

export const Title = styled.Text`
    font-size: 26px;
    font-family: 'Poppins_600SemiBold';
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
    font-size: 12px;
    color: #9A9B9D;
    font-family: 'Poppins_400Regular';
    margin-bottom: 15px;
`;

export const ListContainer = styled.View`
    margin: 15px 0 25px;
`;

export const AddButtonContainer = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AddButton = styled.View`
    border: 2px solid #c8c8c8;
    border-radius: 50px;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    margin-bottom: 7px;
`;

export const AddButtonText = styled.Text`
    font-size: 14px;
    color: #c8c8c8;
    font-family: 'Poppins_400Regular';
`;