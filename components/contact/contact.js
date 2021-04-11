import styles from './contact.module.css';
import homeStyles from '../../styles/Home.module.css';
import Image from 'next/image'

const Contact = ({ contactSectionRef }) => {
	return (
		<>
			<svg style={{ display:'block' }} height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150">
				<path d="M 0,400 C 0,400 0,200 0,200 C 84.06698564593302,209.53110047846891 168.13397129186603,219.06220095693783 274,213 C 379.86602870813397,206.93779904306217 507.53110047846894,185.28229665071768 607,186 C 706.4688995215311,186.71770334928232 777.7416267942584,209.80861244019138 852,229 C 926.2583732057416,248.19138755980862 1003.5023923444976,263.48325358851673 1102,258 C 1200.4976076555024,252.51674641148327 1320.248803827751,226.25837320574163 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" strokeWidth="0" fill="#93329eff" className="transition-all duration-300 ease-in-out delay-150"></path>
			</svg>
			<div className="vh-100 w-100">
				<video className={ styles.video + ' absolute w-100 h-100' } autoPlay muted loop>
					<source src="/contact.mp4" type="video/mp4"/> 
				</video>
				<div ref={ contactSectionRef } id="contact" className={ styles.backgroundColor + ' absolute o-90 h-100 w-100 pt4' }>
					<h2 className={ styles.title + ' tc f2 white fw5 mt0' }>Entrez en contact avec nous</h2>
					<div className="mh7">
						<div className="fl w-60 pv4 ph4">
							<h3 className={ styles.color + ' tc f4 fw5' }>En nous écrivant</h3>
							<form className="mt4">
								<label htmlFor="contact-form-name" className="f5 white fw5">Nom</label>
								<input id="contact-form-name" className={ styles.formular + ' db ba pa2 w-100 h2 mt2 mb4 b--black-20 br2' } type="text" placeholder="Entrez votre nom" required/>
								<label htmlFor="contact-form-email" className="f5 white fw5">Email</label>
								<input id="contact-form-email" className={ styles.formular + ' db ba pa2 w-100 h2 mt2 mb4 b--black-20 br2' } type="email" placeholder="Entrez votre adresse email" required/>
								<label  htmlFor="contact-form-message" className="f5 white fw5">Message</label>
								<textarea id="contact-form-message" className={ styles.formular + ' db pa2 w-100 h4 mt2 mb4 b--black-20 br2' } placeholder="Entrez votre message" required/>
								<input className={ styles.submitButton + ' pointer br-pill grow f5 white fw5 h2 ph4 ba pb2' } type="submit" value="Envoyer"/>
							</form>
						</div>
						<div className={ styles.socialNetwork + " fr w-40 pv4 ph4 br4" }>
							<h3 className="f4 fw5 mb4">Ou via les réseaux sociaux</h3>
							<a className="db link dim mb4 f5" href="#">
								<Image
									src="/facebook.svg"
									alt="icon-facebook"
									width={50}
									height={50}
								/>
								<b className="db mt3 mb2">facebook</b>@graceredaction
							</a>
							<a className="db link dim mb4 f5" href="#">
								<Image
									src="/instagram.svg"
									alt="icon-instagram"
									width={50}
									height={50}
								/>
								<b className="db mt3 mb2">instagram</b>@graceredaction
							</a>
							<a className="db link dim mb4 f5" href="#">
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