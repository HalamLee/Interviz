import Layout from '@/components/layout';
import Header from '@/components/layout/Header';

const BackHeader = () => {
  return <h1>돌아가기 헤더</h1>;
};

BackHeader.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Layout>
      <Header back TextColor="main" />
      {page}
    </Layout>
  );
};

export default BackHeader;
