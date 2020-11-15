import React, { useState } from 'react';
import { LogBox } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  Container, Content, Logo, NewOrderContainer,
} from './styles';
import Button from './components/Button';
import Modal from './components/Modal';
import logo from './images/logo.png';
import Orders from './components/Orders';

LogBox.ignoreLogs(['Unrecognized WebSocket']);

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function handleOpenModal() {
    setIsModalVisible(true);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
  }

  return (
    <>
      <StatusBar style="dark" />
      <Modal visible={isModalVisible} onRequestClose={handleCloseModal} />
      <Container>
        <Content>
          <Logo source={logo} resizeMode="contain" />
          <Orders />
        </Content>

        <NewOrderContainer>
          <Button onPress={handleOpenModal}>
            <Button.Label>Novo Pedido</Button.Label>
          </Button>
        </NewOrderContainer>
      </Container>
    </>
  );
}
