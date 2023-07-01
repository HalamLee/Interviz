import Layout from '@components/layout';
import Header from '@components/layout/Header';

const TestHeader = () => {
  return <h1>헤더 있음</h1>;
};

TestHeader.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header />
      {page}
    </Layout>
  );
};

export default TestHeader;
