import React, { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';

import {
  List, Card, Status, TableNumber,
} from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.65:3001/orders')
      .then((res) => res.json())
      .then(setOrders);

    const socket = socketIo('http://192.168.1.65:3001', {
      transports: ['websocket'],
    });

    socket.on('newOrder', (order) => {
      setOrders((prevState) => [order, ...prevState]);
    });

    socket.on('statusChange', (updatedOrder) => {
      setOrders((prevState) => prevState.map((order) => (
        order._id === updatedOrder._id ? updatedOrder : order
      )));
    });
  }, []);

  return (
    <List
      data={orders}
      keyExtractor={(order) => order._id}
      renderItem={({ item: order }) => (
        <Card status={order.status}>
          <TableNumber status={order.status}>#{order.table}</TableNumber>
          <Status status={order.status}>{order.status}</Status>
        </Card>
      )}
    />
  );
}
