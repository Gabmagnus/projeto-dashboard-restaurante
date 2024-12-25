import styled from 'styled-components';

export const Container = styled.input`
  padding: .7rem;
  margin: 5px 0;
  border-radius: 8px;
  border: 1px solid var(--gray);
  background-color: var(--lighter-gray);
  color: var(--dark-gray);
  outline: none;
  width: 100%;
  transition: border .3s;
  
  &:focus {
    border: 1px solid var(--purple-highlight);
  }

`;
