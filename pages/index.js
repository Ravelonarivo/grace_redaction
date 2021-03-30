import Head from 'next/head';
import Layout from '../components/layout';
import Presentation from '../components/presentation/presentation';
import Offers from '../components/offers/offers';
import Process from '../components/process/process';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />
      <Offers />  
      <Process />
    </Layout>
  );
};

export default Home;
