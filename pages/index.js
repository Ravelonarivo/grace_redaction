import Head from 'next/head';
import Layout from '../components/layout';
import Presentation from '../components/presentation/presentation';
import Offers from '../components/offers/offers';
import Process from '../components/process/process';
import Blog from '../components/blog/blog';
import Contact from '../components/contact/contact';

import { useRef } from 'react';

const Home = () => {
  const presentationSectionRef = useRef(null);
  const offersSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const blogSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <Layout 
      presentationSectionRef={ presentationSectionRef }
      offersSectionRef={ offersSectionRef }
      processSectionRef={ processSectionRef }
      blogSectionRef={ blogSectionRef }
      contactSectionRef={ contactSectionRef }
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation presentationSectionRef={ presentationSectionRef } />
      <Offers offersSectionRef={ offersSectionRef } />  
      <Process processSectionRef={ processSectionRef } />
      <Blog blogSectionRef={ blogSectionRef } />
      <Contact contactSectionRef={ contactSectionRef } />
    </Layout>
  );
};

export default Home;
