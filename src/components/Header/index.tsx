import page from '../../config/enums/page';
import { Container, LogoBox, LogoImage,  HeaderNavBar, HeaderNavItem } from './styles';

interface HeaderProps {
  logoPath?:string
  activePage?: page
}

export function Header({ logoPath="https://placehold.co/80x40/orange/white", activePage = page.LOGIN}: HeaderProps) {
  if (activePage === page.LOGIN) {
    return null;
  }
  
  return (
    <Container>
      <LogoBox> 
        <LogoImage src={logoPath} alt="site placeholder logo" />
      </LogoBox>
      <HeaderNavBar>
        <HeaderNavItem href="#" active={activePage === page.DASHBOARD}>Dashboard</HeaderNavItem>
        <HeaderNavItem href="#" active={activePage === page.PRODUCTS}>Produtos</HeaderNavItem>
        <HeaderNavItem href="#" active={activePage === page.MATERIALS}>Insumos</HeaderNavItem>
      </HeaderNavBar>
    </Container>
  );
}
