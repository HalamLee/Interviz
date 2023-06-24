import Lottie from 'lottie-react';
import Animation from '@public/assets/404_animation.json';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';

const Custom404 = () => {
  return (
    <Wrapper>
      <AnimationWrapper>
        <Lottie animationData={Animation} />
      </AnimationWrapper>
    </Wrapper>
  );
};

export default Custom404;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.main};
  ${theme.center};
  gap: 90px;
`;

const AnimationWrapper = styled.div`
  width: 40%;
`;
