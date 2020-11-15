import { useState, useEffect } from 'react';
import socketIo from 'socket.io-client';

import { Container, Card } from './styles';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/orders')
      .then((res) => res.json())
      .then(setOrders);

    const socket = socketIo('http://localhost:3001', {
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

  function handleStatusChange(status, order) {
    fetch(`http://localhost:3001/orders/${order._id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status }),
    });
  }

  return (
    <Container>
      {orders.map((order) => (
        <Card key={order._id} status={order.status}>
          <header>
            <h3>Pedido <strong>#{order._id.substr(0, 15)}</strong></h3>
            <small>MESA #{order.table}</small>
          </header>
          <p>{order.description}</p>
          <select
            value={order.status}
            onChange={({ target: { value } }) => handleStatusChange(value, order)}
          >
            <option value="PENDING">Pendente</option>
            <option value="PREPARING">Preparando</option>
            <option value="DONE">Finalizado</option>
          </select>
        </Card>
      ))}
    </Container>
  );
}
