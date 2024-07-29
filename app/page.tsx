"use client"
import Image from 'next/image';
import ScreenWrapper from './components/screenwrapper/screenwrapper';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';
// import Cussor from './components/Cussor';
import AnimatedCursor from "react-animated-cursor";
import dynamic from 'next/dynamic';

const Home = () => {

	const router = useRouter();

	const handleClick = () => {
		router.push('/contact');
	};

	const downloadResume = () => {
		const googleDriveLink = 'https://drive.google.com/file/d/1cUFu65VhED62q-Z0cw4pNv9yO4W7LXml/view?usp=sharing';

		// Open the Google Drive link in a new tab
		window.open(googleDriveLink, '_blank');
	};


	const AnimatedCursor = dynamic(() => import('react-animated-cursor'), {
		ssr: false,
	});

	
	return (
		<>
		{/* <Cussor /> */}
		<AnimatedCursor
			innerSize={8}
			outerSize={35}
			innerScale={1}
			outerScale={2}
			outerAlpha={0}
			innerStyle={{
				backgroundColor: 'rgb(0, 0, 0)',
			}}
			outerStyle={{
				border: '3px solid rgb(0, 0, 0)',
			}}
		/>
		<ScreenWrapper animateSplash={false} animateNavbar={true}>
			
			<section className={styles.wrapper}>
				<section className={styles.container}>
					<div className={styles.left}>
						<Image
							src={'/assets/images/profile.jpeg'}
							alt="auradip Ghosh"
							width={0}
							height={0}
							sizes="100vw"
							className={styles.profilePic}
						/>
					</div>
					<div className={styles.right}>
						<h4>Hi There !</h4>
						<h1>Meet Sauradip</h1>
						<p>
							Diving into the digital world like a fearless adventurer, I blend an array of skills and
							technologies to weave magic into every project. From shaping responsive software development to
							refining the nuances of UI/UX design, each endeavor becomes a canvas for boundless
							creativity and innovation. With a knack for problem-solving, I navigate through challenges,
							crafting solutions that sparkle with simplicity and elegance
						</p>
						<div className={styles.btnContainer}>
							
							<button className={styles.solidBtn} onClick={downloadResume}>Download Resume</button> 
							
							<button className={styles.outlineBtn} onClick={handleClick}>Contact Me</button>
						</div>
					</div>
				</section>
			</section>
		</ScreenWrapper>
		</>
	);
};

export default Home;
