import { theme } from '@styles/theme';
import { styled } from 'styled-components';

type Props = {
  type: string;
  text: string;
};

const SpeechBubble = ({ type, text }: Props) => {
  return <Wrapper type={type}>{text}</Wrapper>;
};

export default SpeechBubble;

const Wrapper = styled.div<{ type: string }>`
  position: relative;
  padding: 20px;
  width: 80%;
  height: fit-content;
  word-break: word-wrap;
  line-height: 160%;
  font-weight: ${(props) => (props.type === 'gpt' ? '700' : '500')};
  color: ${(props) =>
    props.type === 'gpt' ? theme.colors.white : theme.colors.main};
  background: ${(props) =>
    props.type === 'gpt' ? theme.colors.sub : theme.colors.white};
  border-radius: 10px;

  &:after {
    border-top: 0px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid
      ${(props) =>
        props.type === 'gpt' ? theme.colors.sub : theme.colors.white};
    content: '';
    position: absolute;
    top: calc(50% - 6px);
    ${(props) => (props.type === 'gpt' ? 'left:-14px' : 'right: -14px')};
    transform: ${(props) =>
      props.type === 'gpt' ? 'rotateZ(270deg)' : 'rotateZ(90deg)'};
  }
`;
