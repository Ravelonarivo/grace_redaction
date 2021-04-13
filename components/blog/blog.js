import homeStyles from '../../styles/Home.module.css';
import styles from './blog.module.css';
import Image from 'next/image';

import { useRef, useEffect } from 'react';

const Blog = ({ blogSectionRef }) => {
	const titleRef = useRef(null);
	const articleRefs = useRef([]);

	const animate = () => {
		const titleRect = titleRef.current.getBoundingClientRect();
		if ((titleRect.top > 0 && titleRect.top <= 100) || (titleRect.bottom >= 100 && titleRect.bottom <= (window.innerHeight || document.documentElement.clientHeight))) {
			titleRef.current.style.visibility = 'visible';
			titleRef.current.classList.add('animate__backInLeft');
		}

		articleRefs.current.forEach(articleRef => {
			const articleRect = articleRef.getBoundingClientRect();
			if (articleRect.top > 0 && articleRect.top <= 720) {
				articleRef.style.visibility = 'visible';
				articleRef.classList.add('animate__fadeIn');
			}
		});		
	};

	useEffect(() => {
		window.addEventListener('scroll', animate);
		return () => window.removeEventListener('scroll', animate);
	});

	const articles = [
		{
			title: 'Quite affectionate and outgoing',
			content: 'Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.',
			author: 'Toto',
			date: '21 Mars 2021',
			image: '/presentation_background.jpg'	
		},
		{
			title: 'Proin sit amet lorem vitae leo feugiat posuere',
			content: 'Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.',
			author: 'Lulu',
			date: '10 Mars 2021',
			image: '/presentation_background.jpg'	
		},
		{
			title: 'Suspendisse sollicitudin nunc vel sem vestibulum faucibus',
			content: 'Nam porttitor justo id ante lacinia faucibus. Nullam erat velit, placerat ut mollis a, venenatis vitae sapien. Vestibulum pretium arcu lorem. Ut vitae dolor eu dolor aliquam varius a id mauris. Suspendisse sollicitudin nunc vel sem vestibulum faucibus. Sed varius efficitur enim ac laoreet.',
			author: 'Momo',
			date: '04 Février 2021',
			image: '/presentation_background.jpg'	
		}
	];

	return (
		<div ref={ blogSectionRef } id="blog" className={ styles.background + ' mt6 mh7' }>
			<h2 ref={ titleRef } className={ styles.title + ' tc f2 dark-blue fw5 animate__animated' }>Consultez notre blog</h2>
			{
				articles.map((article, index) => (
					<div ref={ element => articleRefs.current[index] = element  } key={ index }  className={ styles.articleVisibility + ' dib pointer h5 w-100 mb4 ba b--black-10 pa3 shadow-4 br4 bg-white animate__animated' }>
						<div className="fl h-100 w-70 pl3 pt2">
							<h3 className={ styles.subTitle + ' f4 fw5 mt1' }>{ article.title }</h3>
							<p className="lh-copy">
								{ article.content }
							</p>
							<p className={ styles.color + ' f6 lh-copy mv0' }>Par <span className="ttu">{ article.author }</span></p>
			    			<time className={ styles.color + ' f6 db fw5' }>{ article.date }</time>
						</div>
						<div className="fr h-100 w-30 tc pv2">
							<Image
								className={ styles.image + ' br-100'}
						        priority="true"
							    src={ article.image }
							    width={ 180 }
							    height={ 180 }
							    alt={ `image${index}` }
						    />
					    </div>
					</div>
				))
			}
		</div>
	);
};

export default Blog;