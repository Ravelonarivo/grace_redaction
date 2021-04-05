import homeStyles from '../../styles/Home.module.css';
import styles from './blog.module.css';
import Image from 'next/image';

const Blog = ({ blogSectionRef }) => {
	return (
		<div ref={ blogSectionRef } id="blog" className="mt5 mh7">
			<h2 className={ homeStyles.title + ' tc f2 dark-blue fw4' }>Consultez notre blog</h2>
			<div className="dib h5 w-100 mb4 bb b--black-10 pa3">
				<div className="fl h-100 w-70 pl3 pt2">
					<h3 className="f4 dark-blue fw5 mt1">Quite affectionate and outgoing</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.
					</p>
					<p className="f6 lh-copy gray mv0">Par <span className="ttu">Toto</span></p>
    				<time className="f6 db gray">21 Mars 2021</time>
				</div>
				<div className="fr h-100 w-30 tc pt4">
					<Image
						className={ styles.image + ' br-100'}
				        priority="true"
					    src="/background_1.jpg"
					    width={ 150 }
					    height={ 150 }
					    alt="background_1"
				    />
				    <div className={ styles.blob + ' relative' }>
				    	<Image
							priority="true"
				        	src="/blob_test.svg"
				            alt="blob-test"
				            width={ 280 }
				            height={ 280 }
			            />
				    </div>
			    </div>
			</div>
			<div className="dib h5 w-100 mb4 bb b--black-10 pa3">
				<div className="fl h-100 w-70 pl3 pt2">
					<h3 className="f4 dark-blue fw5 mt1">Proin sit amet lorem vitae leo feugiat posuere</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.
					</p>
					<p className="f6 lh-copy gray mv0">Par <span className="ttu">Lulu</span></p>
    				<time className="f6 db gray">10 Mars 2021</time>
				</div>
				<div className="fr h-100 w-30 tc pt4">
					<Image
						className={ styles.image + ' br-100'}
				        priority="true"
					    src="/background_2.jpg"
					    width={ 150 }
					    height={ 150 }
					    alt="background_2"
				    />
				    <div className={ styles.blob + ' relative' }>
				    	<Image
							priority="true"
				        	src="/blob_test_1.svg"
				            alt="blob-test"
				            width={ 280 }
				            height={ 280 }
			            />
				    </div>
			    </div>
			</div>
			<div className="dib h5 w-100 mb4 bb b--black-10 pa3">
				<div className="fl h-100 w-70 pl3 pt2">
					<h3 className="f4 dark-blue fw5 mt1">Suspendisse sollicitudin nunc vel sem vestibulum faucibus</h3>
					<p className="lh-copy">
						Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.
					</p>
					<p className="f6 lh-copy gray mv0">Par <span className="ttu">Momo</span></p>
    				<time className="f6 db gray">04 Février 2021</time>
				</div>
				<div className="fr h-100 w-30 tc pt4">
					<Image
						className={ styles.image + ' br-100'}
				        priority="true"
					    src="/presentation_background.jpg"
					    width={ 150 }
					    height={ 150 }
					    alt="presentation-image"
				    />
				    <div className={ styles.blob + ' relative' }>
				    	<Image
							priority="true"
				        	src="/blob_test_2.svg"
				            alt="blob-test"
				            width={ 250 }
				            height={ 250 }
			            />
				    </div>
			    </div>
			</div>
		</div>
	);
};

export default Blog;