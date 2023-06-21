import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

type Props = {
  type?: 'color';
  text: string;
};

const SpeechBubble = ({ type, text }: Props) => {
  return <Wrapper type={type}>{text}</Wrapper>;
};

export default SpeechBubble;

const Wrapper = styled.div<{ type?: 'color' }>`
  position: relative;
  padding: 20px;
  width: 70%;
  height: fit-content;
  word-break: keep-all;
  line-height: 160%;
  font-weight: ${(props) => (props.type ? '700' : '500')};
  color: ${(props) => (props.type ? theme.colors.white : theme.colors.main)};
  background: ${(props) =>
    props.type ? theme.colors.sub : theme.colors.white};
  border-radius: 10px;

  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid
      ${(props) => (props.type ? theme.colors.sub : theme.colors.white)};
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    ${(props) => (props.type ? 'left:-14px' : 'right: -14px')};
    transform: ${(props) =>
      props.type ? 'rotateZ(270deg)' : 'rotateZ(90deg)'};
  }
`;
