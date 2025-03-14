import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export default function Header() {
    return (
        <HeaderContainer>
            <HeaderTitle>Meu Primeiro App</HeaderTitle>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.View`
  background-color: #007BFF;
  padding-top: ${StatusBar.currentHeight}px;
  padding: 20px;
`;

const HeaderTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;