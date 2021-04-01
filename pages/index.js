import Head from 'next/head';
import Layout from '../components/layout';
import Presentation from '../components/presentation/presentation';
import Offers from '../components/offers/offers';
import Process from '../components/process/process';
import Blog from '../components/blog/blog';
import Contact from '../components/contact/contact';

import { useRef } from 'react';

const Home = () => {
  const presentationRef = useRef(null);
  const offersRef = useRef(null);
  const processRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <Layout 
      presentationRef={ presentationRef }
      offersRef={ offersRef }
      processRef={ processRef }
      blogRef={ blogRef }
      contactRef={ contactRef }
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation presentationRef={ presentationRef } />
      <Offers offersRef={ offersRef } />  
      <Process processRef={ processRef } />
      <Blog blogRef={ blogRef } />
      <Contact contactRef={ contactRef } />
    </Layout>
  );
};

export default Home;
