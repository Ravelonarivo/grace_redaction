import styles from './process.module.css';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image';

const Process = ({ processSectionRef }) => {
	return (
		<div ref={ processSectionRef } id="process" className={ styles.background + ' mt5 pb5'}>
			<h2 className={ styles.title + ' tc f2 white fw4 pt6' }>Comment nous procédons</h2>
			<div className="vh-75">
				<div className="mh7 h-100">
					<div className="fl h-100 w-40 pv5 pr3">
						<div className="flex h-25 w-100">
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
						<div className="flex h-25 w-100">
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
						<div className="flex h-25 w-100">
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
						<div className="flex h-25 w-100">
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
						<Image
				        	src="/blob_2.png"
				            alt="blob-image"
				            width="600"
				            height="600"
			            />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;