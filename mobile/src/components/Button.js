import styled from 'styled-components/native';

const Button = styled.TouchableOpacity`
  background: #C52233;
  border-radius: 5px;
  height: 50px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

Button.Label = styled.Text`
  color: #fff;
  font-size: 18px;
`;

export default Button;
