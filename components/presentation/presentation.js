import styles from './presentation.module.css';
import Image from 'next/image';

const Presentation = () => {
	return (
		<>
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
	        	<p className={ styles.bgText + ' dark-blue fw8' }>
	              Confiez-nous vos projets.
	            </p>
	            <div class="tc ph3">
	              <a class="f4 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-blue" href="#0">Voir nos offres</a>
	            </div>
	        </div>
		</>
	);
};

export default Presentation;