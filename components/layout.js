import styles from './layout.module.css';
import Image from 'next/image';

const Layout = ({ children }) => {
	return (
		<>
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
			    	<a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#presentation" title="presentation">Accueil</a>
			        <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#offers" title="Offres">Offres</a>
			        <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Processus">Processus</a>
			        <a className="link dim f6 f5-l dib dark-blue b mr3 mr4-l" href="#" title="Contact">Contact</a>
			        <a className="link dim f6 f5-l dib dark-blue b " href="#" title="Blog">Blog</a>
		        </div>
		    </nav>
		      
		    <main>{children}</main>
		      
		    <footer>  
		    	footer 
		    </footer>
		</>
	);
};

export default Layout;