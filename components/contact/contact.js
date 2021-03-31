import styles from './contact.module.css';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image'

const Contact = () => {
	return (
		<div id="contact" className="mt5">
			<h2 className={ homeStyles.title + ' tc f2 dark-blue fw4' }>Entrez en contact avec nous</h2>
			<div className="bg-near-white vh-75">
				<div className="mh7 h-100">
					<div className="fl h-100 w-60 bg-white pv4 ph4">
						<h3 className="tc f4 dark-blue fw5">En nous écrivant</h3>
						<form className="mt4">
							<label htmlFor="contact-form-name" className="f5 dark-blue fw5">Nom</label>
							<input id="contact-form-name" className={ styles.formular + ' db ba pa2 w-100 h2 mt2 mb4 b--black-20' } type="text" placeholder="Entrez votre nom" required/>
							<label htmlFor="contact-form-email" className="f5 dark-blue fw5">Email</label>
							<input id="contact-form-email" className={ styles.formular + ' db ba pa2 w-100 h2 mt2 mb4 b--black-20' } type="email" placeholder="Entrez votre adresse email" required/>
							<label  htmlFor="contact-form-message" className="f5 dark-blue fw5">Message</label>
							<textarea id="contact-form-message" className={ styles.formular + ' db pa2 w-100 h4 mt2 mb4 b--black-20' } placeholder="Entrez votre message" required/>
							<input className={ styles.submitButton + ' br3 grow f5 white fw5 h2 ph4 bg-dark-blue b--dark-blue ba pb2' } type="submit" value="Envoyer"/>
						</form>
					</div>
					<div className="fr h-100 w-40 bg-dark-blue pv4 ph4">
						<h3 className="f4 light-green fw5 mb4">Ou via les réseaux sociaux</h3>
						<Image
							src="/facebook.svg"
							alt="icon-facebook"
							width={50}
							height={50}
						/>
						<p className="lh-copy f5 light-green mb4"><b>facebook</b><br/>@graceredaction</p>
						<Image
							src="/instagram.svg"
							alt="icon-instagram"
							width={50}
							height={50}
						/>
						<p className="lh-copy f5 light-green mb4"><b>instagram</b><br/>@graceredaction</p>
						<Image
							src="/twitter.svg"
							alt="icon-twitter"
							width={50}
							height={50}
						/>
						<p className="lh-copy f5 light-green"><b>twitter</b><br/>@graceredaction</p>				
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;