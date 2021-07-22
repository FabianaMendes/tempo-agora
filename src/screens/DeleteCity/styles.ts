import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
  padding: 30px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 200px;
  background-color: #F38190;
  height: 50px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-family: 'Poppins_600SemiBold';
`;