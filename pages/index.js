import Head from 'next/head';
import Layout from '../components/layout';
import Presentation from '../components/presentation/presentation';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />
      
      <section id="offers">
        <p>Test</p>
      </section>
    
    </Layout>
  );
};

export default Home;
