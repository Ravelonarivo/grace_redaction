import styles from './contact.module.css';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image'

const Contact = ({ contactSectionRef }) => {
	return (
		<>
			<svg style={{ display:'block' }} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#aee4f3ff"></stop><stop offset="95%" stop-color="#00449eff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 52.041605301914586,165.5 104.08321060382917,131 164,147 C 223.91678939617083,163 291.7087628865979,229.5 347,260 C 402.2912371134021,290.5 445.0817378497791,285 513,271 C 580.9182621502209,257 673.9642857142858,234.5 732,231 C 790.0357142857142,227.5 813.0611192930779,243.00000000000003 871,248 C 928.9388807069221,252.99999999999997 1021.7912371134023,247.5 1083,232 C 1144.2087628865977,216.5 1173.7739322533137,191 1228,184 C 1282.2260677466863,177 1361.1130338733433,188.5 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg>
			<div ref={ contactSectionRef } id="contact" className={ styles.background }>
				<h2 className={ styles.title + ' tc f2 white fw4 mt0' }>Entrez en contact avec nous</h2>
				<div className="vh-75">
					<div className="mh7 h-100">
						<div className="fl h-100 w-60 pv4 ph4">
							<h3 className="tc f4 dark-blue fw5">En nous écrivant</h3>
							<form className="mt4">
								<label htmlFor="contact-form-name" className="f5 white fw5">Nom</label>
								<input id="contact-form-name" className={ styles.formular + ' db ba pa2 w-100 h2 mt2 mb4 b--black-20' } type="text" placeholder="Entrez votre nom" required/>
								<label htmlFor="contact-form-email" className="f5 white fw5">Email</label>
								<input id="contact-form-email" className={ styles.formular + ' db ba pa2 w-100 h2 mt2 mb4 b--black-20' } type="email" placeholder="Entrez votre adresse email" required/>
								<label  htmlFor="contact-form-message" className="f5 white fw5">Message</label>
								<textarea id="contact-form-message" className={ styles.formular + ' db pa2 w-100 h4 mt2 mb4 b--black-20' } placeholder="Entrez votre message" required/>
								<input className={ styles.submitButton + ' br3 grow f5 white fw5 h2 ph4 bg-dark-blue b--dark-blue ba pb2' } type="submit" value="Envoyer"/>
							</form>
						</div>
						<div className="fr h-100 w-40 bg-dark-blue pv4 ph4 br--top br4">
							<h3 className="f4 light-green fw5 mb4">Ou via les réseaux sociaux</h3>
							<a className="db link dim mb4 f5 light-green" href="#">
								<Image
									src="/facebook.svg"
									alt="icon-facebook"
									width={50}
									height={50}
								/>
								<b className="db mt3 mb2">facebook</b>@graceredaction
							</a>
							<a className="db link dim mb4 f5 light-green" href="#">
								<Image
									src="/instagram.svg"
									alt="icon-instagram"
									width={50}
									height={50}
								/>
								<b className="db mt3 mb2">instagram</b>@graceredaction
							</a>
							<a className="db link dim mb4 f5 light-green" href="#">
								<Image
									src="/twitter.svg"
									alt="icon-twitter"
									width={50}
									height={50}
								/>
								<b className="db mt3 mb2">twitter</b>@graceredaction				
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;