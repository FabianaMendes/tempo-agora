import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 30px;
`;

export const Title = styled.Text`
    font-size: 14px;
    color: #C8C8C8;
    font-family: 'Poppins_500Medium';
`;

export const InputArea = styled.View`
    border-bottom-color: #C8C8C8;
    border-bottom-width: 1px;
    margin-top: 30px;
`;

export const Input = styled.TextInput`
    font-size: 27px;
    color: #545659;
    font-family: 'Poppins_600SemiBold';
    padding: 0 15px;
`;

export const Button = styled.TouchableOpacity`
    background-color: #BA49D7;
    height: 50px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`;

export const ButtonText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-family: 'Poppins_600SemiBold';
`;

export const LoadingArea = styled.SafeAreaView`
    height: 150px;
    align-items: center;
    justify-content: center;
`;

export const LoadingIcon = styled.ActivityIndicator`
`;