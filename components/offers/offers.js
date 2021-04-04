import styles from './offers.module.css';
import homeStyles from '../../styles/Home.module.css';
import { DesktopOutline } from 'react-ionicons';
import { DocumentTextOutline } from 'react-ionicons';
import { CheckmarkDoneOutline } from 'react-ionicons';

const Offers = ({ offersSectionRef }) => {
	return (
		<div ref={ offersSectionRef } id="offers" className="mt5 mh7">
			<h2 className={ homeStyles.title + ' tc f2 dark-blue fw4' }>Nous sommes une agence de rédaction</h2>
			<p className="mh6 f4 lh-copy">
				Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus.
			</p>
			<div className="mt4">
				<article className="shadow-4 mh4 dib mw5 br3 pb4 mv3 b--black-10 bg-dark-blue">
					<div className="tc bg-white pt4 br--top br3">
				    	<DesktopOutline
						  color={'#00449E'} 
						  title={ 'writing' }
						  height="4rem"
						  width="4rem"
						/>
				    	<h3 className="f4 dark-blue fw5 ma0 pv3">Rédaction</h3>
				  	</div>
				  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  						<path fill="#FFFFFF" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,106.7C672,107,768,181,864,218.7C960,256,1056,256,1152,224C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
					</svg>
				  	<p className="lh-copy measure center ph4 white">
				    	Quite affectionate and outgoing.
				    	She loves to get chin scratches and will
				    	roll around on the floor waiting for you give her more of them.
				  	</p>
				</article>
				<article className="shadow-4 mh4 dib mw5 bg-white br3 pb4 mv3 ba b--black-10">
					<div className={ styles.backgroundColor + ' tc pt4 br--top br3 bg-dark-blue'}>
				    	<DocumentTextOutline
						  color={'#ffffff'} 
						  title={ 'writing' }
						  height="4rem"
						  width="4rem"
						/>
				    	<h3 className="f4 white fw5 ma0 pv3">Réécriture</h3>
				  	</div>
				  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  						<path fill="#AEE4F3" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,106.7C672,107,768,181,864,218.7C960,256,1056,256,1152,224C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
					</svg>
				  	<p className="lh-copy measure center ph4">
				    	Quite affectionate and outgoing.
				    	She loves to get chin scratches and will
				    	roll around on the floor waiting for you give her more of them.
				  	</p>
				</article>
				<article className="shadow-4 mh4 dib mw5 br3 pb4 mv3 b--black-10 bg-dark-blue">
					<div className="tc bg-white pt4 br--top br3">
				    	<CheckmarkDoneOutline
						  color={'#00449E'} 
						  title={ 'writing' }
						  height="4rem"
						  width="4rem"
						/>
				    	<h3 className="f4 dark-blue fw5 ma0 pv3">Correction</h3>
				  	</div>
				  	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  						<path fill="#FFFFFF" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,106.7C672,107,768,181,864,218.7C960,256,1056,256,1152,224C1248,192,1344,128,1392,96L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
					</svg>
				  	<p className="lh-copy measure center ph4 white">
				    	Quite affectionate and outgoing.
				    	She loves to get chin scratches and will
				    	roll around on the floor waiting for you give her more of them.
				  	</p>
				</article>
			</div>
		</div>
	);
};

export default Offers;