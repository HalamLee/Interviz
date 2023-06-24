import { styled } from 'styled-components';
import Layout from '@components/layout';
import Header from '@components/layout/Header';
import Question from '@components/question';
import { theme } from '@styles/theme';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useEffect, useState } from 'react';

const QuestionPage = () => {
  const router = useRouter();
  const [data, setData] = useState<{ id: null | number; question: string }[]>(
    []
  );
  const { query } = router;

  useEffect(() => {
    axios
      .post(`/question/list`, {
        techStack: query.techStack,
        yearsOfExperience: query.yearsOfExperience,
        partOfDevelopment: query.partOfDevelopment,
        numberOfQuestion: query.numberOfQuestion,
      })
      .then((res) => {
        console.log(res.data.result);
        setData([...res.data.result]);
      });
  }, [query]);

  return (
    <Wrapper>
      {data &&
        data.map((el) => (
          <Question
            key={el.id}
            text={el.question}
            onClick={() => {
              router.push({
                pathname: '/interview',
                query: { question: el.question },
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

export async function getServerSideProps(context: any) {
  const { query } = context;
  const techStack = query.techStack || '';
  const yearsOfExperience = query.yearsOfExperience || '';
  const partOfDevelopment = query.partOfDevelopment || '';
  const numberOfQuestion = query.numberOfQuestion || '';
  return {
    props: {
      techStack,
      yearsOfExperience,
      partOfDevelopment,
      numberOfQuestion,
    },
  };
}

export default QuestionPage;

const Wrapper = styled.div`
  width: 100%;
  ${theme.center}
  gap: 30px;
  padding: 30px 0;
`;
