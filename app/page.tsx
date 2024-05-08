"use client"
import Image from 'next/image';
import ScreenWrapper from './components/screenwrapper/screenwrapper';

import { useRouter } from 'next/navigation';
import styles from './page.module.css';

const Home = () => {

	const router = useRouter();

	const handleClick = () => {
		router.push('/contact');
	};

	const downloadResume = () => {
		const googleDriveLink = 'https://drive.google.com/file/d/18pGCB2JMQ5YSvjw8XzdoMCU7FG8LVQZp/view?usp=sharing';

		// Open the Google Drive link in a new tab
		window.open(googleDriveLink, '_blank');
	};
	
	return (
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
	);
};

export default Home;
