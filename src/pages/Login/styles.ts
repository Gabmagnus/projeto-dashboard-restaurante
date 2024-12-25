import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--light-gray);
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.1);
`;

export const LoginTitle = styled.h1`
  color: var(--lighter-gray);
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
`;