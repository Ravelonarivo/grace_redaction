import styles from './layout.module.css';
import Image from 'next/image';
import { MailOutline } from 'react-ionicons';

const Layout = ({ children }) => {
	const date = new Date();

	return (
		<>
			<nav className={ styles.sticky + ' db dt-l w-100 border-box pa3 ph7-l bg-white shadow-3' }>
		        <a className="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
		          	<Image
			            src="/logos/logo_2.png"
			            height={60}
			            width={60}
			            alt="logo-nav"
			        />
		        </a>
		        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
			    	<a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#presentation" title="presentation">Accueil</a>
			        <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#offers" title="Offres">Offres</a>
			        <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Processus">Processus</a>
			        <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Blog">Blog</a>
			        <a className="link dim f6 f5-l dib dark-blue b " href="#" title="Contact">Contact</a>
		        </div>
		    </nav>
		      
		    <main className>{children}</main>
		      
		    <footer class="bg-near-black white-80 pv5 ph7 vh-75">
		    	<div className="h-100">
			    	<div className="fl w-25 h-100">
			    		<Image
			    			src="/logos/logo_5.png"
			    			height={60}
			    			width={60}
			    			alt="logo-footer"
			    		/>
			    		<a className="link dim db f5 mb2 mt3" href="#">Accueil</a>
			    		<a className="link dim db f5 mb2" href="#">Offres</a>
			    		<a className="link dim db f5 mb2" href="#">Processus</a>
			    		<a className="link dim db f5 mb2" href="#">Blog</a>
			    		<a className="link dim db f5 mb2" href="#">Contact</a>
			    	</div>
			    	<div className="fl w-25 h-100">
			    		<h2 className="f2 fw4 ma0">Nos Offres</h2>
			    		<a className="link dim db f5 mb2 mt3" href="#">Rédaction</a>
			    		<a className="link dim db f5 mb2" href="#">Réécriture</a>
			    		<a className="link dim db f5 mb2" href="#">Correction</a>
			    	</div>
			    	<div className="fl w-25 h-100">
			    		<div className="flex">
				    		<MailOutline
							  	color={'#fffff'} 
							  	title={'email'}
							  	height="1.5rem"
							  	width="1.5rem"
							/>
							<a className="link dim f5 ml2" href="#">contact@graceredaction.com</a>
						</div>
			    	</div>
			    	<div className="tc fr w-25 h-100">
			    		<a className="link dim mr3" href="#">
			    			<Image
								src="/facebook.svg"
								alt="icon-facebook"
								width={30}
								height={30}
							/>
			    		</a>
			    		<a className="link dim mr3" href="#">
			    			<Image
								src="/instagram.svg"
								alt="icon-instagram"
								width={30}
								height={30}
							/>
			    		</a>
			    		<a className="link dim" href="#">
			    			<Image
								src="/twitter.svg"
								alt="icon-twitter"
								width={30}
								height={30}
							/>
			    		</a>
			    	</div>
		    	</div>
				<p class="f5 tc white-80 fw4">© { date.getFullYear() } Grace Rédaction.</p>
			</footer>
		</>
	);
};

export default Layout;