import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--light-gray);
`
export const LogoBox = styled.div`

`
export const LogoImage = styled.img`

`
export const HeaderNavBar = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`
export const HeaderNavItem = styled.a<{ active?: boolean }>`
  color: ${props => props.active ? 'var(--purple-highlight)' : 'var(--lighter-gray)'};
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  transition: color .3s;

  &:hover {
    color: var(--purple-highlight);
  }
`