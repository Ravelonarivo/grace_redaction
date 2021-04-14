import styles from './process.module.css';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image';

import { useRef, useEffect, useState } from 'react';

const Process = ({ processSectionRef }) => {
	const titleRef = useRef(null);
	const processRef = useRef(null);
	const firstStepRef = useRef(null);
	const secondStepRef= useRef(null);
	const thirdStepRef = useRef(null);
	const fourthStepRef = useRef(null);

	const animate = () => {
		const titleRect = titleRef.current.getBoundingClientRect();
		if ((titleRect.top > 0 && titleRect.top <= 100) || (titleRect.bottom >= 100 && titleRect.bottom <= (window.innerHeight || document.documentElement.clientHeight))) {
			titleRef.current.style.visibility = 'visible';
			titleRef.current.classList.add('animate__backInRight');
			processRef.current.style.visibility = 'visible';
			firstStepRef.current.classList.add('animate__lightSpeedInLeft', 'animate__delay-2s');
			secondStepRef.current.classList.add('animate__lightSpeedInLeft', 'animate__delay-3s');
			thirdStepRef.current.classList.add('animate__lightSpeedInLeft', 'animate__delay-4s');
			fourthStepRef.current.classList.add('animate__lightSpeedInLeft', 'animate__delay-5s');
		}		
	};

	useEffect(() => {
		window.addEventListener('scroll', animate);
		return () => window.removeEventListener('scroll', animate);
	});

	return (
		<div ref={ processSectionRef } id="process" className={ styles.background + ' mt6 pb5'}>
			<h2 ref={ titleRef } className={ styles.title + ' tc f2 white fw5 pt6 animate__animated' }>Comment nous procédons</h2>
			<div className="vh-75">
				<div className="mh7 h-100">
					<div ref={ processRef } className={ styles.processVisibility + ' fl h-100 w-40 pv5 pr3' }>
						<div ref={ firstStepRef } className="flex h-25 w-100 animate__animated">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 pv3 f3 fw5 white">1</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure white">
									Vous prenez contact avec nous à partir de notre formulaire 
									de contact ou en nous écrivons un email. 
								</p>
							</div>
						</div>
						<div ref={ secondStepRef }  className="flex h-25 w-100 animate__animated">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 pv3 f3 white fw5">2</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure white">
									Quite affectionate and outgoing.
				    				She loves to get chin scratches and will
								</p>
							</div>
						</div>
						<div ref={ thirdStepRef } className="flex h-25 w-100 animate__animated">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 pv3 f3 white fw5">3</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure white">
									Quite affectionate and outgoing.
				    				She loves to get chin scratches and will
								</p>
							</div>
						</div>
						<div ref={ fourthStepRef } className="flex h-25 w-100 animate__animated">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 pv3 f3 white fw5">4</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure white">
									Quite affectionate and outgoing.
				    				She loves to get chin scratches and will
								</p>
							</div>
						</div>
					</div>
					<div className="fr relative h-100 w-60">
						<div className={ styles.square + ' absolute' }></div>
						<Image
							priority="true"
				        	src="/blob.png"
				            alt="blob-image"
				            width="600"
				            height="600"
			            />
			            <div className={ styles.blob_1 + ' absolute w-100' }>
				            <Image
					        	src="/blob_1.png"
					            alt="blob-image"
					            width="600"
					            height="600"
				            />
			            </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;