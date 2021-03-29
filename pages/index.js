import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'; 
import Layout from '../components/layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <section id="home">
          <div className={ styles.bgWrap }>
            <Image
              src="/background_7.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="background-image"
            />
          </div>
          <div className={ styles.bgTextAndButton }>
            <p className={ styles.bgText + ' dark-blue fw8' }>
              Confiez nous vos projets.
            </p>
            <div class="tc ph3">
              <a class="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Voir nos offres</a>
            </div>
          </div>
        </section>

        <section id="offers">
          <p>Test</p>
        </section>
    
    </Layout>
  );
};

export default Home;
