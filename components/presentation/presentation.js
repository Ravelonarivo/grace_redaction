import styles from './presentation.module.css';
import Image from 'next/image';

import { scrollToSection } from '../../lib/functions';

const Presentation = ({ presentationSectionRef, sectionRefs }) => {
	return (
		<div ref={ presentationSectionRef } id="presentation" className={ styles.background }>
			<div className={ styles.bgWrap }>
	            <Image
	            	priority="true"
		        	src="/presentation_background.jpg"
		            layout="fill"
		            objectFit="cover"
		            quality={100}
		            alt="presentation-image"
	            />
	            
	        </div>
	        <div className={ styles.bgTextAndButton }>
	        	<h1 className={ styles.bgText + ' fw8 ttu white pa2 o-90 br-pill' }>
	              	Confiez-nous vos projets.
	            </h1>
	            <div className="tc ph3">
	              	<ul>
	              		<li 
	              			className={ styles.button + ' pointer f4 grow no-underline br-pill ph3 pv2 mb2 dib white' } 
	              			onClick={ () => scrollToSection('offers', sectionRefs) }
	              		> 
	              			Voir nos offres
	              		</li>
	              	</ul>
	            </div>
	        </div>	
		</div>
	);
};

export default Presentation;