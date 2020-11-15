import { Container, Content } from './styles';
import GlobalStyles from './styles/GlobalStyles';
import logo from './images/logo.svg';
import Orders from './components/Orders';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Content>
          <img src={logo} alt="ezOrders" />

          <Orders />
        </Content>
      </Container>
    </>
  );
}
