import { ReactNode } from 'react';

import { Container } from './styles';

interface LoginButtonProps {
  children: ReactNode;
  onClickAction: () => void;
}

export function LoginButton({ children, onClickAction }: LoginButtonProps) {
  return (
    <Container type='button' onClick={onClickAction} >
      {children}
    </Container>
  );
}
