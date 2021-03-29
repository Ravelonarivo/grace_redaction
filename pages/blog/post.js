import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

const Post = () => {
	return (
		<Layout>
			<Head>
				<title>
					Posts		
				</title>
			</Head>
			<h1>Posts</h1>
			<Link href="/">
				<a>Home</a>
			</Link>
			<Image
				src="/logos/logo_1.png"
				height={144}
				width={144}
				alt="logo_1"
			/>
			<Image
				src="/logos/logo_2.png"
				height={144}
				width={144}
				alt="logo_2"
			/>
			<Image
				src="/logos/logo_3.png"
				height={144}
				width={144}
				alt="logo_3"
			/>
			<Image
				src="/logos/logo_4.png"
				height={144}
				width={144}
				alt="logo_4"
			/>
			<Image
				src="/logos/logo_5.png"
				height={144}
				width={144}
				alt="logo_5"
			/>

			<style jsx>{`
				h1 {
					color: blue;
				}
			`}</style>
		</Layout>
	);
};

export default Post;