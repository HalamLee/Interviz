import Lottie from 'lottie-react';
import BigAnimation from '@public/assets/loading_animation_big.json';
import { styled } from 'styled-components';
import { theme } from '@styles/theme';
import Image from 'next/image';

type Props = {
  width: string;
  size: 'big' | 'small';
};

const Loading = ({ width, size }: Props) => {
  return (
    <Wrapper width={width}>
      <AnimationWrapper>
        {size === 'big' ? (
          <Lottie animationData={BigAnimation} />
        ) : (
          <ImageWrapper width={width}>
            <ImageStyled
              src={'/svg/loading_animation_small.svg'}
              alt="loading"
              fill
            />
          </ImageWrapper>
        )}
      </AnimationWrapper>
    </Wrapper>
  );
};

export default Loading;

const Wrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: 100vh;
  background-color: inherit;
  ${theme.center};
`;

const AnimationWrapper = styled.div`
  width: 40%;
`;

const ImageWrapper = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  position: relative;
`;

const ImageStyled = styled(Image)`
  object-fit: cover;
`;
