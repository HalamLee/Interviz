import Lottie from 'lottie-react';
import Animation from '@public/assets/animation.json';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';
import Image from 'next/image';

function SplashScreen() {
  return (
    <Wrapper>
      <TextWrapper>
        <LogoWrapper>
          <Image src={'/svg/logo.svg'} fill alt="logo" priority />
        </LogoWrapper>
        <span>chatGPT로 기술면접 준비하기</span>
      </TextWrapper>
      <AnimationWrapper>
        <Lottie animationData={Animation} />
      </AnimationWrapper>
    </Wrapper>
  );
}

export default SplashScreen;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.main};
  ${theme.center};
  gap: 90px;
`;

const TextWrapper = styled.div`
  width: 100%;
  ${theme.center};
  gap: 24px;
  font-family: 'TheJamsil5Bold', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 24px;
  color: ${theme.colors.white};
  font-weight: 500;
  ${theme.media.mobile2} {
    font-size: 18px;
    gap: 4px;
  }
`;

const LogoWrapper = styled.div`
  width: 50%;
  height: 70px;
  position: relative;
  ${theme.media.mobile2} {
    width: 70%;
  }
  > image {
    object-fit: cover;
  }
`;

const AnimationWrapper = styled.div`
  width: 40%;
`;
