import styles from './presentation.module.css';
import Image from 'next/image';

const Presentation = ({ presentationSectionRef }) => {
	return (
		<div ref={ presentationSectionRef } id="accueil">
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
	        	<h1 className={ styles.bgText + ' dark-blue fw8 ttu' }>
	              Confiez-nous vos projets.
	            </h1>
	            <div className="tc ph3">
	              <a className="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Voir nos offres</a>
	            </div>
	        </div>
		</div>
	);
};

export default Presentation;