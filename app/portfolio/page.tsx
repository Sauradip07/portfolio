import ScreenWrapper from '@/components/screenwrapper/screenwrapper';
import styles from './portfolio.module.css';
import { MyPortfolio } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import AnimatedCursor from 'react-animated-cursor';

const Portfolio = () => {
	return (
		<>
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
		<ScreenWrapper animateSplash={false} animateNavbar={false}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<h1>My Projects</h1>
					<p>
						Bringing creativity and functionality together to build seamless web solutions as a versatile
						full stack developer.
					</p>
					<section className={styles.portfolio}>
						{MyPortfolio.map(({ name, content, poster }, index) => (
							<div key={index} className={styles.portfolioItem}>
								<Image src={poster} alt={name} width={300} height={200}/>
							</div>
						))}
					</section>
					<h3>
						<Link href="/portfolio">View All Projects&nbsp;&nbsp;&nbsp;</Link>
						<Image src="/assets/icons/arrow-right.svg" alt="arrow-right" width={28} height={28} />
					</h3>
				</div>
			</div>
		</ScreenWrapper>
		</>
	);
};

export default Portfolio;
