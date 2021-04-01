import styles from './offers.module.css';
import homeStyles from '../../styles/Home.module.css';
import { DesktopOutline } from 'react-ionicons';
import { DocumentTextOutline } from 'react-ionicons';
import { CheckmarkDoneOutline } from 'react-ionicons';

const Offers = () => {
	return (
		<div id="offers" className="mt5 mh7">
			<h2 className={ homeStyles.title + ' tc f2 dark-blue fw4' }>Nous sommes une agence de rédaction</h2>
			<p className="mh6 f4 lh-copy">
				Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus.
			</p>
			<div className="mt4">
				<article className="shadow-4 mh4 dib mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
					<div className="tc">
				    	<DesktopOutline
						  color={'#00449E'} 
						  title={ 'writing' }
						  height="4rem"
						  width="4rem"
						/>
				    	<h3 className="f4 dark-blue fw5">Rédaction</h3>
				    	<hr className="mw3 bb bw1 b--black-10"/>
				  	</div>
				  	<p className="lh-copy measure center">
				    	Quite affectionate and outgoing.
				    	She loves to get chin scratches and will
				    	roll around on the floor waiting for you give her more of them.
				  	</p>
				</article>
				<article className="shadow-4 mh4 dib mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
					<div className="tc">
				    	<DocumentTextOutline
						  color={'#00449E'} 
						  title={ 'rewriting' }
						  height="4rem"
						  width="4rem"
						/>
				    	<h3 className="f4 dark-blue fw5">Réécriture</h3>
				    	<hr className="mw3 bb bw1 b--black-10"/>
				  	</div>
				  	<p className="lh-copy measure center">
				    	Quite affectionate and outgoing.
				    	She loves to get chin scratches and will
				    	roll around on the floor waiting for you give her more of them.
				  	</p>
				</article>
				<article className="shadow-4 mh4 dib mw5 bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
					<div className="tc">
				    	<CheckmarkDoneOutline
						  color={'#00449E'} 
						  title={ 'correction' }
						  height="4rem"
						  width="4rem"
						/>
				    	<h3 className="f4 dark-blue fw5">Correction</h3>
				    	<hr className="mw3 bb bw1 b--black-10"/>
				  	</div>
				  	<p className="lh-copy measure center">
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