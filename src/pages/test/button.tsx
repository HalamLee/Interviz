import Button from '@/components/button';
import { theme } from '@/styles/theme';
import { styled } from 'styled-components';

const ButtonTest = () => {
  const handleClick = () => {
    alert('클릭');
  };

  return (
    <Wrapper>
      <Button
        isSmall
        content={'작은 버튼'}
        onClick={handleClick}
        color={'main'}
      />
      <Button content={'큰 버튼'} onClick={handleClick} color={'sub'} />
    </Wrapper>
  );
};

export default ButtonTest;

const Wrapper = styled.div`
  padding-top: 50px;
  width: 400px;
  ${theme.center};
  gap: 20px;
`;
