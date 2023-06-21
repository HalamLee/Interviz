import { styled } from 'styled-components';
import CustomSelect from '@/components/select';

const Select = () => {
  return (
    <Wrapper>
      <CustomSelect
        width={'200px'}
        initialText={'테스트'}
        optionData={['test', 'test2']}
      />
      <CustomSelect
        width={'400px'}
        initialText={'테스트'}
        optionData={['test', 'test2']}
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
