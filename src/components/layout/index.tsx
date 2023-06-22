import { ReactNode } from 'react';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';

type Props = {
  children: ReactNode;
  className?: React.ComponentProps<'div'>['className'];
};

const Layout = ({ children, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <main>{children}</main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.main`
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${theme.colors.white};
  ${theme.shadows.large};
`;
