import styles from './offers.module.css';
import homeStyles from '../../styles/Home.module.css';
import { DesktopOutline } from 'react-ionicons';
import { DocumentTextOutline } from 'react-ionicons';
import { CheckmarkDoneOutline } from 'react-ionicons';
import Image from 'next/image';

const Offers = ({ offersSectionRef }) => {
	return (
		<div ref={ offersSectionRef } id="offers" className="mt5 mh7">
			<h2 className={ styles.title + ' tc f2 dark-blue fw5' }>Nous sommes une agence de rédaction</h2>
			<p className="mh6 f4 lh-copy">
				Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus.
			</p>
			<div className="mt4 tc">
				<div className="dib br3 mh4 mw5 mv3 shadow-3">
					<article>
						<div className="tc bg-white pt4 br--top br3">
					    	<DesktopOutline
							  color={'#93329E'} 
							  title={ 'writing' }
							  height="4rem"
							  width="4rem"
							/>
					    	<h3 className={ styles.subTitle_1 + ' f4 fw5 ma0 pt3' }>Rédaction</h3>
					  	</div>
					  	<svg style={{ display:'block' }} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
					  		<path d="M 0,400 C 0,400 0,200 0,200 C 87.57142857142861,229.57142857142856 175.14285714285722,259.1428571428571 304,243 C 432.8571428571428,226.85714285714286 602.9999999999998,164.99999999999997 738,143 C 873.0000000000002,121.00000000000003 972.8571428571429,138.85714285714286 1084,155 C 1195.142857142857,171.14285714285714 1317.5714285714284,185.57142857142856 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#93329eff" className="transition-all duration-300 ease-in-out delay-150"></path>
					  	</svg>
					  	<p className={ styles.backgroundColor_1 + ' lh-copy measure center ph4 white ma0 pb4 br--bottom br3'}>
					    	Quite affectionate and outgoing.
					    	She loves to get chin scratches and will
					    	roll around on the floor waiting for you give her more of them.
					  	</p>
					</article>
				</div>
				<div className="dib br3 mh4 mw5 mv3 shadow-3">
					<article>
						<div className="tc bg-white pt4 br--top br3">
					    	<DocumentTextOutline
							  color={'#FF005C'} 
							  title={ 'writing' }
							  height="4rem"
							  width="4rem"
							/>
					    	<h3 className={ styles.subTitle_2 + ' f4 fw5 ma0 pt3' }>Réécriture</h3>
					  	</div>
					  	<svg style={{ display:'block' }} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
					  		<path d="M 0,400 C 0,400 0,200 0,200 C 135.10714285714286,195.82142857142856 270.2142857142857,191.64285714285714 377,202 C 483.7857142857143,212.35714285714286 562.2499999999999,237.25 687,237 C 811.7500000000001,236.75 982.7857142857142,211.35714285714286 1116,201 C 1249.2142857142858,190.64285714285714 1344.607142857143,195.32142857142856 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#ff005cff" className="transition-all duration-300 ease-in-out delay-150"></path>
					  	</svg>
					  	<p className={ styles.backgroundColor_2 + ' lh-copy measure center ph4 white ma0 pb4 br--bottom br3'}>
					    	Quite affectionate and outgoing.
					    	She loves to get chin scratches and will
					    	roll around on the floor waiting for you give her more of them.
					  	</p>
					</article>
				</div>
				<div className="dib br3 mh4 mw5 mv3 shadow-3">
					<article>
						<div className="tc bg-white pt4 br--top br3">
					    	<CheckmarkDoneOutline
							  color={'#A463F2'} 
							  title={ 'writing' }
							  height="4rem"
							  width="4rem"
							/>
					    	<h3 className={ styles.subTitle_3 + ' f4 fw5 ma0 pt3' }>Correction</h3>
					  	</div>
					  	<svg style={{ display:'block' }} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
					  		<path d="M 0,400 C 0,400 0,200 0,200 C 152.67857142857144,233.78571428571428 305.3571428571429,267.57142857142856 417,264 C 528.6428571428571,260.42857142857144 599.25,219.5 705,219 C 810.75,218.5 951.6428571428571,258.42857142857144 1080,262 C 1208.357142857143,265.57142857142856 1324.1785714285716,232.78571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#a463f2ff" className="transition-all duration-300 ease-in-out delay-150"></path>
					  	</svg>					  	
					  	<p className={ styles.backgroundColor_3 + ' lh-copy measure center ph4 white bg-dark-blue ma0 pb4 br--bottom br3' }>
					    	Quite affectionate and outgoing.
					    	She loves to get chin scratches and will
					    	roll around on the floor waiting for you give her more of them.
					  	</p>
					</article>
				</div>
			</div>
		</div>
	);
};

export default Offers;