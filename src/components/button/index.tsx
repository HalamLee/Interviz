import notoSansKr from '@styles/font';
import { ColorsTypes, theme } from '@styles/theme';
import { css, styled } from 'styled-components';

type Props = {
  isSmall?: boolean;
  content: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  color: keyof ColorsTypes;
};

const Button = ({ isSmall, content, onClick, color }: Props) => {
  return (
    <Wrapper isSmall={isSmall} onClick={onClick} color={color}>
      {content}
    </Wrapper>
  );
};

export default Button;

const Wrapper = styled.button<{ color: keyof ColorsTypes; isSmall?: boolean }>`
  /* 공통 */
  ${theme.center}
  ${notoSansKr.style}
  font-weight: 500;
  color: ${theme.colors.white};
  background-color: ${(props) => theme.colors[props.color]};
  cursor: pointer;
  border: none;
  outline: none;

  /* big */
  width: 150px;
  height: 50px;
  border-radius: 5px;
  ${theme.shadows.btnBig};
  font-size: 16px;

  /* small => isSmall props 사용 */
  ${(props) =>
    props.isSmall &&
    css`
      width: 74px;
      height: 30px;
      border-radius: 3px;
      font-size: 10px;
    `}
`;
