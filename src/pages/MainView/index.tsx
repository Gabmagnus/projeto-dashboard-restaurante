import { useState } from 'react';
import { Container } from './styles';


export function MainView() {
  const [count, setCount] = useState<number>(0)

  return (
    
    <Container>
      <span style={{color:"#fff", margin:"0 20px"}}>{count}</span>
      <button onClick={() => {setCount(count + 1)}}>Aumentar um</button>
    </Container>
  );
}
