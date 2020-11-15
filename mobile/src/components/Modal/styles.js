import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const Header = styled.View`
  margin-top: 32px;
  padding: 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 135px;
`;

export const Form = styled.View`
  margin-top: 64px;
  padding: 0 16px;
`;

export const FormGroup = styled.View`
  margin-bottom: 24px;
`;

export const Label = styled.Text`
  font-size: 18px;
  color: #0A100D;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput`
  height: ${({ multiline }) => (!multiline ? 45 : 110)}px;
  padding: ${({ multiline }) => (!multiline ? 0 : 16)}px 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
