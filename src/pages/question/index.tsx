import { styled } from 'styled-components';
import Layout from '@components/layout';
import Header from '@components/layout/Header';
import Question from '@components/question';
import { theme } from '@styles/theme';
import { useRouter } from 'next/router';

const dummy_data = [
  {
    id: 1,
    text: '노년에게서 그들은 인간은 때까지 이것이야말로 하여도 되려니와, 별과 쓸쓸하랴? 심장의 동산에는 꽃 많이 피가 천하를 같이 이것은 봄바람이다. 무엇을 황금시대를 없는 수 물방아 아니더면, 가치를 봄바람이다. 대한 역사를 인생에 찾아다녀도, 어디 위하여서. 구하기 소담스러운 옷을 봄바람이다. 목숨을 없으면 청춘 이것이다. 아름답고 낙원을 있음으로써 산야에 실로 그들의 얼마나 있으랴? 공자는 그림자는 너의 같은 얼마나 사막이다. 가지에 튼튼하며, 수 구할 인도하겠다는 원대하고, 교향악이다.   청춘을 끓는 설산에서 물방아 공자는 석가는 이것이다. 창공에 못하다 이상 수 길을 꽃이 남는 때까지 열매를 교향악이다. 속잎나고, 장식하는 청춘 끓는 과실이 것이다. 청춘에서만 구하지 대고, 있으랴? 방지하는 위하여서 그들은 하였으며, 우리의 같이, 이상의 있다. 그들은 있을 같은 할지니, 크고 오아이스도 무엇을 품에 봄바람이다. 뭇 가치를 눈이 끓는 웅대한 모래뿐일 위하여 미묘한 철환하였는가? 속에서 얼음에 찾아 놀이 인생의 트고, 것이다.보라, 방지하는 이것이다. 스며들어 가치를 피에 가치를 심장의 그리하였는가? 청춘 용기가 스며들어 노년에게서 날카로우나 위하여, 것이다. 인도하겠다는 그러므로 꽃이 뭇 소리다.이것은 없으면, 이것이다. 있음으로써 그들은 우리의 뛰노는 더운지라 하였으며, 가진 가치를 봄바람이다. 찾아 불어 모래뿐일 얼마나 우리의 든 뛰노는 실로 뿐이다. 위하여 미인을 찾아다녀도, 그들은 인류의 보는 것은 가치를 것이다.보라, 칼이다. 현저하게 뼈 노래하며 평화스러운 속에서 봄날의 있을 따뜻한 곳으로 이것이다. 주는 인생을 기쁘며, 운다. 끝에 용감하고 군영과 청춘의 품고 끝까지 있는가? 사라지지 인류의 용기가 아니더면, 이상, 석가는 가슴이 칼이다. 물방아 천자만홍이 것은 그들은 지혜는 온갖 이상의 우리의 봄바람이다. 노년에게서 우리 싶이 같은 반짝이는 부패뿐이다.',
  },
  {
    id: 2,
    text: '호이스팅이란?',
  },
  {
    id: 3,
    text: 'Box Model이란?',
  },
  {
    id: 4,
    text: 'SSR이란?',
  },
  {
    id: 5,
    text: 'var,let,const 차이',
  },
  {
    id: 6,
    text: '호이스팅이란?',
  },
  {
    id: 7,
    text: 'Box Model이란?',
  },
  {
    id: 8,
    text: 'SSR이란?',
  },
  {
    id: 9,
    text: 'Box Model이란?',
  },
  {
    id: 10,
    text: 'SSR이란?',
  },
];

const QuestionPage = () => {
  const router = useRouter();
  return (
    <Wrapper>
      {dummy_data.map((question) => (
        <Question
          key={question.id}
          text={question.text}
          onClick={() => {
            router.push({
              pathname: '/interview',
              query: { question: question.text },
            });
          }}
        />
      ))}
    </Wrapper>
  );
};

QuestionPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header back TextColor="main" />
      {page}
    </Layout>
  );
};

export default QuestionPage;

const Wrapper = styled.div`
  width: 100%;
  ${theme.center}
  gap: 30px;
  padding: 30px 0;
`;
