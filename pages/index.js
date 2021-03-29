import Head from 'next/head';
import Layout from '../components/layout';
import Presentation from '../components/presentation/presentation';
import Offers from '../components/offers/offers';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />

      <Offers />  
    </Layout>
  );
};

export default Home;
