import styles from './layout.module.css';
import Image from 'next/image';
import { MailOutline } from 'react-ionicons';

import { useRef, useEffect } from 'react';

import { scrollToSection } from '../lib/functions';

const Layout = ({ children, sectionRefs }) => {
	const date = new Date();

	const presentationNavRef = useRef(null)
	const offersNavRef = useRef(null);
	const processNavRef = useRef(null);
	const blogNavRef = useRef(null);
	const contactNavRef = useRef(null);

	const navRefs = [presentationNavRef, offersNavRef, processNavRef, blogNavRef, contactNavRef];

	const footerContentRef = useRef(null);
	const footerNavRef = useRef(null);
	const footerOffersRef = useRef(null);
	const footerMailRef = useRef(null);
	const footerSocialNetworkRef = useRef(null);
	const copyrightRef = useRef(null);

	const highlightNav = () => {
		sectionRefs.forEach(sectionRef => {
			const sectionRefTop = Math.round(sectionRef.current.getBoundingClientRect().top);	
			const sectionRefBottom = Math.round(sectionRef.current.getBoundingClientRect().bottom);
			if ((sectionRefTop > 0 && sectionRefTop <= 100) || (sectionRefBottom >= 100 && sectionRefBottom <= (window.innerHeight || document.documentElement.clientHeight))) {
				navRefs.forEach(navRef => {
					if (navRef.current.id === sectionRef.current.id) {
						navRef.current.classList.add('is-active');
					} else {
						navRef.current.classList.remove('is-active');
					}
				});
			}
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', highlightNav);
		return () => window.removeEventListener('scroll', highlightNav);
	});

	const animate = () => {
		const footerContentRect = footerContentRef.current.getBoundingClientRect();
		if (footerContentRect.top > 0 && footerContentRect.top <= 740) {
			footerContentRef.current.style.visibility = 'visible';
			footerNavRef.current.classList.add('animate__lightSpeedInRight');
			footerOffersRef.current.classList.add('animate__lightSpeedInRight', 'animate__delay-2s');
			footerMailRef.current.classList.add('animate__lightSpeedInRight', 'animate__delay-3s');
			footerSocialNetworkRef.current.classList.add('animate__lightSpeedInRight', 'animate__delay-4s');			
			copyrightRef.current.classList.add('animate__heartBeat', 'animate__delay-5s');
		}		
	};

	useEffect(() => {
		window.addEventListener('scroll', animate);
		return () => window.removeEventListener('scroll', animate);
	});

	return (
		<>
			<nav className={ styles.sticky + ' db dt-l w-100 border-box pa3 ph7-l shadow-3' }>
		        <a className="link dim" href="#" title="Aller à la page d'Accueil">
		          	<Image
			            src="/logos/logo_5.png"
			            height={60}
			            width={60}
			            alt="logo-nav"
			        />
		        </a>
		        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
		        	<ul>
				    	<li 
				    		ref={ presentationNavRef }
				    		id="presentation"
				    		className="pb2 pointer dim f6 f5-l dib b mr3 mr4-l ttu white"
				    		onClick={ () => scrollToSection(presentationNavRef.current.id, sectionRefs) }
				    	>
				    		Accueil
				    	</li>
				        <li 
				        	ref={ offersNavRef }
				        	id="offers"
				        	className="pb2 pointer dim f6 f5-l dib b mr3 mr4-l ttu white" 
				        	onClick={ () => scrollToSection(offersNavRef.current.id, sectionRefs)}
				        >
				        	Offres
				        </li>
				        <li 
				        	ref={ processNavRef }
				        	id="process"
				        	className="pb2 pointer dim f6 f5-l dib b mr3 mr4-l ttu white" 
				        	onClick={ () => scrollToSection(processNavRef.current.id, sectionRefs) }
				        >
				        	Processus
				        </li>
				        <li
				        	ref={ blogNavRef }
				        	id="blog"
				        	className="pb2 pointer dim f6 f5-l dib b mr3 mr4-l ttu white"
				        	onClick={ () => scrollToSection(blogNavRef.current.id, sectionRefs) }
				        >
				        	Blog
				        </li>
				        <li 
				        	ref={ contactNavRef }
				        	id="contact"
				        	className="pb2 pointer dim f6 f5-l dib b ttu white"  
				        	onClick={ () => scrollToSection(contactNavRef.current.id, sectionRefs) }
				        >
				        	Contact
				        </li>
			        </ul>
		        </div>
		    </nav>
		      
		    <main>{children}</main>
		      
		    <footer className={ styles.background + ' bg-near-black white-80 pv5 ph7 vh-75' }>
		    	<div ref={ footerContentRef } className={ styles.content + ' h-100' }>
			    	<div ref={ footerNavRef } className="fl w-25 h-100 animate__animated">
			    		<a className="link dim" href="#" title="Aller à la page d'Accueil">
				    		<Image
				    			src="/logos/logo_5.png"
				    			height={60}
				    			width={60}
				    			alt="logo-footer"
				    		/>
				    	</a>	
			    		<a className="link dim db f5 mb2 mt3" href="#">Accueil</a>
			    		<a className="link dim db f5 mb2" href="#">Offres</a>
			    		<a className="link dim db f5 mb2" href="#">Processus</a>
			    		<a className="link dim db f5 mb2" href="#">Blog</a>
			    		<a className="link dim db f5 mb2" href="#">Contact</a>
			    	</div>
			    	<div ref={ footerOffersRef } className="fl w-25 h-100 animate__animated">
			    		<h2 className="f2 fw4 ma0">Nos Offres</h2>
			    		<a className="link dim db f5 mb2 mt3" href="#">Rédaction</a>
			    		<a className="link dim db f5 mb2" href="#">Réécriture</a>
			    		<a className="link dim db f5 mb2" href="#">Correction</a>
			    	</div>
			    	<div ref={ footerMailRef } className="fl w-25 h-100 animate__animated">
			    		<div className="flex">
				    		<MailOutline
							  	color={'#fffff'} 
							  	title={'email'}
							  	height="1.5rem"
							  	width="1.5rem"
							/>
							<a className="link dim f5 ml2" title="email" href="#">contact@graceredaction.com</a>
						</div>
			    	</div>
			    	<div ref={ footerSocialNetworkRef } className="tc fr w-25 h-100 animate__animated">
			    		<a className="link dim mr3" title="facebook" href="#">
			    			<Image
								src="/facebook.svg"
								alt="icon-facebook"
								width={30}
								height={30}
							/>
			    		</a>
			    		<a className="link dim mr3" title="instagram" href="#">
			    			<Image
								src="/instagram.svg"
								alt="icon-instagram"
								width={30}
								height={30}
							/>
			    		</a>
			    		<a className="link dim" title="twitter" href="#">
			    			<Image
								src="/twitter.svg"
								alt="icon-twitter"
								width={30}
								height={30}
							/>
			    		</a>
			    	</div>
		    	</div>
				<p ref={ copyrightRef } className="f5 tc white-80 fw4 animate__animated">© { date.getFullYear() } Grace Rédaction.</p>
			</footer>
			<style jsx>{`
				.is-active {
					border-bottom: 4px solid #FFFFFF;
				}
			`}</style>
		</>
	);
};

export default Layout;