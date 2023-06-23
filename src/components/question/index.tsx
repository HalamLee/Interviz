import { theme } from '@styles/theme';
import { styled } from 'styled-components';

type Props = {
  text: string;
  onClick: () => void;
};

const Question = ({ text, onClick }: Props) => {
  return <Wrapper onClick={onClick}>{text}</Wrapper>;
};

export default Question;

const Wrapper = styled.div`
  ${theme.shadows.small};
  width: 80%;
  border-radius: 8px;
  padding: 16px 24px;
  word-break: keep-all;
  line-height: 160%;
  cursor: pointer;
`;
