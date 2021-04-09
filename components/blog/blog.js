import homeStyles from '../../styles/Home.module.css';
import styles from './blog.module.css';
import Image from 'next/image';

const Blog = ({ blogSectionRef }) => {
	return (
		<div ref={ blogSectionRef } id="blog" className="mt5 mh7">
			<h2 className={ styles.title + ' tc f2 dark-blue fw5' }>Consultez notre blog</h2>
			<div className={ styles.background + ' dib h5 w-100 mb4 ba b--black-10 pa3 shadow-4 br4' }>
				<div className="fl h-100 w-70 pl3 pt2">
					<h3 className={ styles.subTitle + ' f4 fw5 mt1' }>Quite affectionate and outgoing</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.
					</p>
					<p className={ styles.color + ' f6 lh-copy dark-blue mv0' }>Par <span className="ttu">Toto</span></p>
    				<time className={ styles.color + ' f6 db dark-blue fw5' }>21 Mars 2021</time>
				</div>
				<div className="fr h-100 w-30 tc pv2">
					<Image
						className={ styles.image + ' br-100'}
				        priority="true"
					    src="/background_1.jpg"
					    width={ 180 }
					    height={ 180 }
					    alt="background_1"
				    />
			    </div>
			</div>
			<div className={ styles.background + ' dib h5 w-100 mb4 ba b--black-10 pa3 shadow-4 br4' }>
				<div className="fl h-100 w-70 pl3 pt2">
					<h3 className={ styles.subTitle + ' f4 fw5 mt1' }>Proin sit amet lorem vitae leo feugiat posuere</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.
					</p>
					<p className={ styles.color + ' f6 lh-copy dark-blue mv0' }>Par <span className="ttu">Lulu</span></p>
    				<time className={ styles.color + ' f6 db dark-blue fw5' }>10 Mars 2021</time>
				</div>
				<div className="fr h-100 w-30 tc pv2">
					<Image
						className={ styles.image + ' br-100'}
				        priority="true"
					    src="/background_2.jpg"
					    width={ 180 }
					    height={ 180 }
					    alt="background_2"
				    />
			    </div>
			</div>
			<div className={ styles.background + ' dib h5 w-100 mb4 ba b--black-10 pa3 shadow-4 br4' }>
				<div className="fl h-100 w-70 pl3 pt2">
					<h3 className={ styles.subTitle + ' f4 fw5 mt1' }>Suspendisse sollicitudin nunc vel sem vestibulum faucibus</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.
					</p> 
					<p className={ styles.color + ' f6 lh-copy dark-blue mv0' }>Par <span className="ttu">Momo</span></p>
    				<time className={ styles.color + ' f6 db dark-blue fw5' }>04 Février 2021</time>
				</div>
				<div className="fr h-100 w-30 tc pv2">
					<Image
						className={ styles.image + ' br-100'}
				        priority="true"
					    src="/presentation_background.jpg"
					    width={ 180 }
					    height={ 180 }
					    alt="presentation-image"
				    />
			    </div>
			</div>
		</div>
	);
};

export default Blog;