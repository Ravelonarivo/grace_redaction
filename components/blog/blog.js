import homeStyles from '../../styles/Home.module.css';
import styles from './blog.module.css';
import Image from 'next/image';

const Blog = () => {
	return (
		<div id="blog" className="mt5 mh7">
			<h2 className={ homeStyles.title + ' tc f2 dark-blue fw4' }>Consultez notre blog</h2>
			<div className="dib h5 w-100 mb4 bb b--black-10">
				<div className="fl h-100 w-60 pr1">
					<h3 className="f4 dark-blue fw5 mt1">Quite affectionate and outgoing</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet. Pellentesque tincidunt sem nec leo ornare faucibus.
					</p>
					<p class="f6 lh-copy gray mv0">Par <span class="ttu">Toto</span></p>
    				<time class="f6 db gray">21 Mars 2021</time>
				</div>
				<div className={ styles.bgWrap + ' fr relative h-75 w-40' }>
					<Image
			            priority="true"
				        src="/background_1.jpg"
				        layout="fill"
				        objectFit="cover"
				        quality={100}
				        alt="background_1"
			        />
				</div>
			</div>
			<div className="dib h5 w-100 mb4 bb b--black-10">
				<div className="fl h-100 w-60 pr1">
					<h3 className="f4 dark-blue fw5 mt1">Proin sit amet lorem vitae leo feugiat posuere</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet. Pellentesque tincidunt sem nec leo ornare faucibus.
					</p>
					<p class="f6 lh-copy gray mv0">Par <span class="ttu">Lulu</span></p>
    				<time class="f6 db gray">10 Mars 2021</time>
				</div>
				<div className={ styles.bgWrap + ' fr relative h-75 w-40' }>
					<Image
			            priority="true"
				        src="/background_2.jpg"
				        layout="fill"
				        objectFit="cover"
				        quality={100}
				        alt="background_2"
			        />
				</div>
			</div>
			<div className="dib h5 w-100 mb4 bb b--black-10">
				<div className="fl h-100 w-60 pr1">
					<h3 className="f4 dark-blue fw5 mt1">Suspendisse sollicitudin nunc vel sem vestibulum faucibus</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet. Pellentesque tincidunt sem nec leo ornare faucibus.
					</p>
					<p class="f6 lh-copy gray mv0">Par <span class="ttu">Momo</span></p>
    				<time class="f6 db gray">04 Février 2021</time>
				</div>
				<div className={ styles.bgWrap + ' fr relative h-75 w-40' }>
					<Image
			            priority="true"
				        src="/presentation_background.jpg"
				        layout="fill"
				        objectFit="cover"
				        quality={100}
				        alt="presentation-image"
			        />
				</div>
			</div>
		</div>
	);
};

export default Blog;