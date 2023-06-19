import { theme } from '@/styles/theme';
import Image from 'next/image';
import { styled } from 'styled-components';

type Props = {
  back?: boolean;
  TextColor?: 'white' | 'main';
};

const handleBack = () => {
  window.history.back();
};

const Header = ({ back, TextColor }: Props) => {
  return back ? (
    <NoShadowWrapper TextColor={TextColor}>
      <BtnWrapper onClick={handleBack}>
        <Image
          src={`/svg/left-arrow-${TextColor}.svg`}
          width={8}
          height={15}
          alt="arrow"
        />
        돌아가기
      </BtnWrapper>
    </NoShadowWrapper>
  ) : (
    <ShadowWrapper>헤더</ShadowWrapper>
  );
};

export default Header;

const Basic = styled.div`
  width: 100%;
  height: 68px;
  font-size: 20px;
  color: ${theme.colors.main};
  ${theme.center};
`;

const ShadowWrapper = styled(Basic)`
  ${theme.shadows.large};
  font-weight: 900;
`;

const NoShadowWrapper = styled(Basic)<{ TextColor?: 'white' | 'main' }>`
  padding-left: 35px;
  width: calc(100% - 35px);
  font-weight: 700;
  justify-content: start;
  flex-direction: row;
  gap: 16px;
  color: ${(props) => props.TextColor};
  background-color: ${(props) =>
    props.TextColor === 'main' ? theme.colors.white : theme.colors.main};
`;

const BtnWrapper = styled.div`
  cursor: pointer;
  & :first-child {
    margin-right: 16px;
  }
`;
