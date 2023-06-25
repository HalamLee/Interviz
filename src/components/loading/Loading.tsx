import Lottie from 'lottie-react';
import Animation from '@public/assets/loading_animation_big.json';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';

const Loading = () => {
  return (
    <Wrapper>
      <AnimationWrapper>
        <Lottie animationData={Animation} />
      </AnimationWrapper>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.white};
  ${theme.center};
  gap: 90px;
`;

const AnimationWrapper = styled.div`
  width: 40%;
`;
