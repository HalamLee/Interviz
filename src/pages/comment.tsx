import Layout from '@components/layout';
import Header from '@components/layout/Header';
import { theme } from '@styles/theme';
import Head from 'next/head';
import { styled } from 'styled-components';

const Comment = () => {
  return (
    <Wrapper>
      <section
        ref={(elem) => {
          if (!elem) {
            return;
          }
          const scriptElem = document.createElement('script');
          scriptElem.src = 'https://utteranc.es/client.js';
          scriptElem.async = true;
          scriptElem.setAttribute('repo', 'HalamLee/Interviz');
          scriptElem.setAttribute('issue-term', 'title');
          scriptElem.setAttribute('theme', 'github-light');
          scriptElem.setAttribute('label', '💬 comment');
          scriptElem.crossOrigin = 'anonymous';
          elem.appendChild(scriptElem);
        }}
      />
    </Wrapper>
  );
};

Comment.getLayout = function getLayout(page: React.ReactElement) {
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

export default Comment;

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: ${theme.colors.white};
  ${theme.center};
  gap: 40px;
  padding: 30px 0;
  box-sizing: border-box;
`;
