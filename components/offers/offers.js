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
					  		<path d="M 0,400 C 0,400 0,200 0,200 C 110.86124401913872,185.4928229665072 221.72248803827745,170.98564593301438 329,167 C 436.27751196172255,163.01435406698562 539.9712918660288,169.55023923444975 617,192 C 694.0287081339712,214.44976076555025 744.3923444976077,252.81339712918663 837,245 C 929.6076555023923,237.18660287081337 1064.4593301435407,183.19617224880383 1172,168 C 1279.5406698564593,152.80382775119617 1359.7703349282297,176.4019138755981 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#93329E" className="transition-all duration-300 ease-in-out delay-150"></path>
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
					  	<svg style={{ display:'block' }} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 100.69487179487183,166.95128205128205 201.38974358974366,133.9025641025641 279,137 C 356.61025641025634,140.0974358974359 411.1358974358974,179.34102564102562 483,207 C 554.8641025641026,234.65897435897438 644.0666666666667,250.73333333333332 716,243 C 787.9333333333333,235.26666666666668 842.5974358974358,203.725641025641 930,197 C 1017.4025641025642,190.274358974359 1137.5435897435898,208.36410256410255 1228,213 C 1318.4564102564102,217.63589743589745 1379.228205128205,208.81794871794872 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#ff005cff" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
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
					  		<path d="M 0,400 C 0,400 0,200 0,200 C 74.93779904306217,172.98564593301438 149.87559808612434,145.97129186602874 258,163 C 366.12440191387566,180.02870813397126 507.43540669856463,241.10047846889944 600,263 C 692.5645933014354,284.89952153110056 736.3827751196171,267.62679425837325 831,233 C 925.6172248803829,198.37320574162675 1071.0334928229668,146.39234449760767 1181,138 C 1290.9665071770332,129.60765550239233 1365.4832535885166,164.80382775119617 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#A463F2" className="transition-all duration-300 ease-in-out delay-150"></path>
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