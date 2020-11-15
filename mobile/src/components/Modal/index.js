import React, { useState } from 'react';
import {
  Modal as RNModal,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  Container, Header, Logo, Form, FormGroup, Label, Input,
} from './styles';
import logo from '../../images/logo.png';
import Button from '../Button';

export default function Modal({ visible, onRequestClose }) {
  const [table, setTable] = useState(null);
  const [description, setDescription] = useState(null);

  function handleSubmit() {
    fetch('http://192.168.1.65:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ table, description }),
    })
      .then((resp) => {
        if (resp.ok) {
          Alert.alert('Pedido cadastrado com sucesso!');
          onRequestClose();
        } else {
          Alert.alert('Ops!', 'Ocorreu um erro ao cadastrar o pedido!');
        }
      });
  }

  return (
    <RNModal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <Container>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <Header>
                <Logo source={logo} resizeMode="contain" />
                <TouchableOpacity onPress={onRequestClose}>
                  <Ionicons name="ios-close" size={38} color="#0A100D" />
                </TouchableOpacity>
              </Header>
              <Form>
                <FormGroup>
                  <Label>Número da mesa</Label>
                  <Input placeholder="Número da mesa" onChangeText={setTable} autoCorrect={false} />
                </FormGroup>

                <FormGroup>
                  <Label>Pedido</Label>
                  <Input
                    multiline
                    placeholder="Descrição do pedido"
                    onChangeText={setDescription}
                    autoCorrect={false}
                  />
                </FormGroup>

                <FormGroup>
                  <Button onPress={handleSubmit}>
                    <Button.Label>Cadastrar Pedido</Button.Label>
                  </Button>
                </FormGroup>
              </Form>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </Container>
    </RNModal>
  );
}
