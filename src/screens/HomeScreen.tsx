import React, { useState } from 'react';
import { ScrollView, FlatList, Alert, Button } from 'react-native';
import styled from 'styled-components/native';
import HeaderComponent from '../components/HeaderComponent';

const HomeScreen = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([
    { id: '1', text: 'Limpar a garagem' }
  ]);

  const addItem = () => {
    if (text.trim()) {
      setItems([...items, { id: Date.now().toString(), text }]);
      setText('');
    }
  };

  return (
    <Container>
      <HeaderComponent/>

      <Content>
        <Input
          placeholder="Digite uma tarefa"
          onChangeText={setText}
          value={text}
        />

        <AddButton onPress={addItem}>
          <ButtonText>Adicionar</ButtonText>
        </AddButton>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem>
              <ListItemText>{item.text}</ListItemText>
              <Button
                title="Encerrar tarefa"
                color="#f31a0a"
                onPress={() => {
                    const newItems = items.filter(i => i.id !== item.id); 
                    setItems(newItems); 
                }}
              />
            </ListItem>
          )}
        />

        
        <Button
          title="Encerrar todas as tarefas"
          onPress={() => Alert.alert('Bem-vindo', 'Aplicativo React Native')}
          color="#f31a0a"
        />
      </Content>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: #f8f9fa;
`;

const Content = styled.View`
  padding: 20px;
`;

const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ListItem = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const ListItemText = styled.Text`
  font-size: 16px;
`;

export default HomeScreen;