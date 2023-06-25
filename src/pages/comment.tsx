import Layout from '@components/layout';
import Header from '@components/layout/Header';
import { theme } from '@styles/theme';
import Head from 'next/head';
import { styled } from 'styled-components';
import dynamic from 'next/dynamic';

const DynamicComment = dynamic(
  () => import('@components/comment').then((mod) => mod.default),
  {
    ssr: false, // SSR을 비활성화하여 클라이언트 측에서만 렌더링되도록 설정
  }
);

const CommentPage = () => {
  return (
    <Wrapper>
      <Content>
        <h1>코멘트를 남겨주세요!</h1>
        <span>피드백, 원하는 기능, 하고 싶은 말.. 등등 모두 환영합니다 🙌🏻</span>
      </Content>
      <DynamicComment />
    </Wrapper>
  );
};

CommentPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Head>
        <title>Interviz | Comment</title>
      </Head>
      <Header back TextColor="main" />
      {page}
    </Layout>
  );
};

export default CommentPage;

const Wrapper = styled.div`
  width: 100%;
  min-height: calc(100vh - 50px);
  background-color: ${theme.colors.white};
  ${theme.center};
  gap: 40px;
  padding: 30px 0;
  box-sizing: border-box;
`;

const Content = styled.div`
  height: 300px;
  ${theme.center};
  gap: 40px;
  margin-bottom: 20px;

  h1 {
    font-size: 48px;
  }

  span {
    font-size: 20px;
  }
`;
