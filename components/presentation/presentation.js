import styles from './presentation.module.css';
import Image from 'next/image';

import { scrollToSection } from '../../lib/functions';

const Presentation = ({ presentationSectionRef, sectionRefs }) => {
	return (
		<div ref={ presentationSectionRef } id="presentation" className={ styles.background }>
			<div className={ styles.square + ' absolute' }></div>
			<div className={ styles.bgWrap }>
	            <Image
	            	priority="true"
		        	src="/presentation_background.jpg"
		            layout="fill"
		            objectFit="cover"
		            quality={100}
		            alt="presentation-image"
	            />
	            <div className={ styles.backgroundColor + " absolute h-100 w-100 o-70" }></div>
	        </div>
	        <div className={ styles.bgTextAndButton }>
	        	<h1 className={ styles.bgText + ' fw7 ttu white animate__animated animate__backInDown' }>
	              	Nous sommes une agence de rédaction.
	            </h1>
	            <p className="f4 lh-copy white animate__animated animate__fadeIn animate__delay-2s">
					Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus.
				</p>
	            <ul className="dib pa0 ml1">
	              	<li 
	              		className={ styles.button + ' pointer f4 no-underline br-pill ph3 pv2 mb2 dib white ba b--white bw1 animate__animated animate__bounceIn animate__delay-3s' } 
	           			onClick={ () => scrollToSection('offers', sectionRefs) }
	           		> 
	           			Voir nos offres
	              	</li>
	            </ul>
	        </div>	
		</div>
	);
};

export default Presentation;