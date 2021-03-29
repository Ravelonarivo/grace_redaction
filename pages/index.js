import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Link from 'next/link'; 

const Home = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={ styles.sticky + ' db dt-l w-100 border-box pa3 ph6-l bg-white shadow-3' }>
        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
          <Image
            src="/logos/logo_2.png"
            height={60}
            width={60}
            alt="logo"
          />
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Accueil">Accueil</a>
          <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Offres">Offres</a>
          <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Processus">Processus</a>
          <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Contact">Contact</a>
          <a className="link dim f6 f5-l dib dark-blue b " href="#" title="Blog">Blog</a>
        </div>
      </nav>

      <main> 
        <section>
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

        <section>
          <p>Test</p>
        </section>
      </main>

      <footer>   
      </footer>
    </div>
  );
};

export default Home;
