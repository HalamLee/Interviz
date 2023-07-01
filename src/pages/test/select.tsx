import { styled } from 'styled-components';
import CustomSelect from '@components/select';
import { useEffect, useState } from 'react';

const Select = () => {
  const [test1, setTest1] = useState('');
  const [test2, setTest2] = useState('');

  useEffect(() => {
    console.log({ test1, test2 });
  }, [test1, test2]);

  return (
    <Wrapper>
      <CustomSelect
        width={'200px'}
        initialText={'테스트'}
        optionData={['test', 'test2']}
        setSelect={(selected: string) => setTest1(selected)}
      />
      <CustomSelect
        width={'400px'}
        initialText={'테스트'}
        optionData={['test', 'test2']}
        setSelect={(selected: string) => setTest2(selected)}
      />
    </Wrapper>
  );
};

export default Select;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
