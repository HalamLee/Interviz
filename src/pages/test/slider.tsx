import Slider from '@components/slider';
import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

const SliderTest = () => {
  const [test, setTest] = useState(5);

  useEffect(() => {
    console.log({ test });
  }, [test]);
  return (
    <Wrapper>
      <Slider
        width={'264px'}
        setSelect={(selected: number) => setTest(selected)}
      />
    </Wrapper>
  );
};

export default SliderTest;

const Wrapper = styled.div`
  padding-top: 100px;
  padding-left: 100px;
`;
