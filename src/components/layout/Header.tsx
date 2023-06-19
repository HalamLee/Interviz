import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

type Props = {
  back?: boolean;
};

const Header = ({ back }: Props) => {
  return back ? <Wrapper back>돌아가기</Wrapper> : <Wrapper>헤더</Wrapper>;
};

export default Header;

const Wrapper = styled.div<{ back?: boolean }>`
  width: 100%;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.back ? '' : theme.shadows.large)}
`;
