import styles from './process.module.css';
import Image from 'next/image';

const Process = () => {
	return (
		<div id="process" className="mt5">
			<h2 className={ styles.title + ' tc f2 dark-blue fw4' }>Comment nous procédons</h2>
			<div className="bg-near-white vh-75">
				<div className="mh7 h-100">
					<div className={ styles.bgWrap + ' fl relative h-100 w-60' }>
						<Image
			            	priority="true"
				        	src="/presentation_background.jpg"
				            layout="fill"
				            objectFit="cover"
				            quality={100}
				            alt="presentation-image"
			            />
					</div>
					<div className="fr h-100 w-40 bg-white pv5 pr3">
						<div className="flex h-25 w-100">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 b--dark-blue pv3 f3 dark-blue fw5">1</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure f5 mid-gray">
									Vous prenez contact avec nous à partir de notre formulaire 
									de contact ou en nous écrivons un email. 
								</p>
							</div>
						</div>
						<div className="flex h-25 w-100">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 b--dark-blue pv3 f3 dark-blue fw5">2</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure f5 mid-gray">
									Quite affectionate and outgoing.
				    				She loves to get chin scratches and will
								</p>
							</div>
						</div>
						<div className="flex h-25 w-100">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 b--dark-blue pv3 f3 dark-blue fw5">3</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure f5 mid-gray">
									Quite affectionate and outgoing.
				    				She loves to get chin scratches and will
								</p>
							</div>
						</div>
						<div className="flex h-25 w-100">
							<div className="tc w-30">
								<div className="br-100 h3 w3 dib ba bw1 b--dark-blue pv3 f3 dark-blue fw5">4</div>
							</div>
							<div className="w-70">
								<p className="ma0 lh-copy measure f5 mid-gray">
									Quite affectionate and outgoing.
				    				She loves to get chin scratches and will
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;