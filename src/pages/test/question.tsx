import Question from '@/components/question';
import { styled } from 'styled-components';

const QuestionTest = () => {
  return (
    <Wrapper>
      <Question text={'var, let, const 에 대해 설명해주세요.'} />
      <Question
        text={
          '고동을 봄날의 길지 하였으며, 지혜는 바로 뿐이다. 너의 뼈 곧 천지는 더운지라 위하여서. 이것은 두기 풍부하게 피다. 무엇을 거선의 끓는 사라지지 미인을 얼마나 가치를 듣는다.'
        }
      />
    </Wrapper>
  );
};

export default QuestionTest;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 40px;
`;
