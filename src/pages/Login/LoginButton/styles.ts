import styled from 'styled-components';

export const Container = styled.button`
  padding: .7rem;
  margin: 5px 0;  
  border-radius: 8px;
  border: none;
  background-color: var(--purple-highlight);
  color: var(--white);
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color .3s;

  &:hover {
    background-color: #7A41F4;
  }

  &:active {
    background-color: #5C2AED;
  }
  
  &:focus {
    outline: none;
  }
`;
