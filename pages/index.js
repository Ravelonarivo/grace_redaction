import Head from 'next/head';
import Layout from '../components/layout';
import Presentation from '../components/presentation/presentation';
import Offers from '../components/offers/offers';
import Process from '../components/process/process';
import Blog from '../components/blog/blog';
import Contact from '../components/contact/contact';

import { useRef } from 'react';

import 'animate.css';

const Home = () => {
  const presentationSectionRef = useRef(null);
  const offersSectionRef = useRef(null);
  const processSectionRef = useRef(null);
  const blogSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  const sectionRefs = [presentationSectionRef, offersSectionRef, processSectionRef, blogSectionRef, contactSectionRef]; 
  
  return (
    <Layout 
      sectionRefs={ sectionRefs   }
    >
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
      </Head>

      <Presentation 
        presentationSectionRef={ presentationSectionRef } 
        sectionRefs={ sectionRefs }
      />
      <Offers offersSectionRef={ offersSectionRef } />  
      <Process processSectionRef={ processSectionRef } />
      <Blog blogSectionRef={ blogSectionRef } />
      <Contact contactSectionRef={ contactSectionRef } />
    </Layout>
  );
};

export default Home;