import { useContext, useState } from 'react';
import { InputBox } from '../../components/InputBox';
import { LoginButton } from './LoginButton';
import { Container, LoginBox, LoginTitle } from './styles';
import {AuthContext} from '../../store/hooks/AuthContext'
export function Login() {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const { login } = useContext(AuthContext)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => { setUsername(e.target.value); };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => { setPassword(e.target.value); };  
  const handleLogin = () => { 
    if (username && password) {
      login()
    } else {
      alert('Login failed');
    }
  };
  return (
    <Container>
      <LoginBox>
        <LoginTitle>Login</LoginTitle>
        <InputBox 
        type='text' 
        onChange={handleUsernameChange} 
        value={username}
        placeholder='Usuario'
        isRequired />
        <InputBox 
        type='password'
        onChange={handlePasswordChange}
        value={password}
        placeholder='Palavra-passe'
        isRequired />
        <LoginButton onClickAction={handleLogin}>Login</LoginButton>
      </LoginBox>
    </Container>
  );
}
