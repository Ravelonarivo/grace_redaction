import styles from './offers.module.css';
import homeStyles from '../../styles/Home.module.css';

import { DesktopOutline } from 'react-ionicons';
import { DocumentTextOutline } from 'react-ionicons';
import { CheckmarkDoneOutline } from 'react-ionicons';

import Image from 'next/image';

import { useRef, useEffect } from 'react';

import Particles from "react-tsparticles";

const Offers = ({ offersSectionRef }) => {
	const titleRef = useRef(null);
	const offersRef = useRef(null);
	const writingRef = useRef(null);
	const rewritingRef= useRef(null);
	const correctionRef = useRef(null);

	const animate = () => {
		const titleRect = titleRef.current.getBoundingClientRect();
		if ((titleRect.top > 0 && titleRect.top <= 100) || (titleRect.bottom >= 100 && titleRect.bottom <= (window.innerHeight || document.documentElement.clientHeight))) {
			titleRef.current.style.visibility = 'visible';
			titleRef.current.classList.add('animate__backInLeft');
			offersRef.current.style.visibility = 'visible';
			writingRef.current.classList.add('animate__flipInX', 'animate__delay-2s');
			rewritingRef.current.classList.add('animate__flipInX', 'animate__delay-3s');
			correctionRef.current.classList.add('animate__flipInX', 'animate__delay-4s');
		}		
	};

	useEffect(() => {
		window.addEventListener('scroll', animate);
		return () => window.removeEventListener('scroll', animate);
	});

	return (
		<>
		<Particles className="absolute w-100 h-100" url="particlesjs-config.json"/>
		<div ref={ offersSectionRef } id="offers" className={ styles.background + ' mt6' }>
			<div className={ styles.test }></div>
			<h2 ref={ titleRef } className={ styles.title + ' tc f2 dark-blue fw5 animate__animated' }>Nos offres</h2>
			<div ref={ offersRef }  className={ styles.offersVisibility +  ' mt4 tc' }>
				<div ref={ writingRef } className="dib br3 mh4 mw5 mv3 shadow-3 animate__animated">
					<article>
						<div className="tc bg-transparent pt4 br--top br3">
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
				<div ref={ rewritingRef } className="dib br3 mh4 mw5 mv3 shadow-3 animate__animated">
					<article>
						<div className="tc bg-transparent pt4 br--top br3">
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
				<div ref={ correctionRef } className="dib br3 mh4 mw5 mv3 shadow-3 animate__animated">
					<article>
						<div className="tc bg-transparent pt4 br--top br3">
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
		</>
	);
};

export default Offers;