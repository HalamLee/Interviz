import Slider from '@/components/slider';
import { styled } from 'styled-components';

const SliderTest = () => {
  return (
    <Wrapper>
      <Slider width={264} />
    </Wrapper>
  );
};

export default SliderTest;

const Wrapper = styled.div`
  padding-top: 100px;
  padding-left: 100px;
`;
