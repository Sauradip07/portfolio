'use client';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import styles from './splashscreen.module.css';
import { useGSAP } from '@gsap/react';
import AnimatedCursor from 'react-animated-cursor';

type Props = {
	animationCompleted: () => void;
};

const SplashScreen: React.FC<Props> = ({ animationCompleted }) => {
	const splashScreenRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const tl = gsap.timeline({
				onComplete: () => animationCompleted(),
			});

			tl.fromTo(
				'#circle',
				{ opacity: 0, y: -window.innerHeight / 2 + 'px' },
				{
					opacity: 1,
					duration: 0.8,
					y: '0px',
					ease: 'bounce.out',
				},
			)
				.to('#circle', {
					duration: 2,
					scale: 24,
					ease: 'ease.in',
				})
				.fromTo(
					'#title',
					{ opacity: 0 },
					{
						duration: 1,
						opacity: 1,
						marginTop: '0px',
						ease: 'ease.in',
					},
					'-=0.5',
				)
				.to('#title', {
					duration: window.innerWidth > 1000 ? 4 : 0.5,
					scale: window.innerWidth > 1000 ? 230 : 1.75,
					ease: 'ease.out',
				});
		},
		{ scope: splashScreenRef },
	);

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
		<div className={styles.background} ref={splashScreenRef} id={'splash'}>
			<div id="circle" className={styles.circle} style={{ opacity: 0 }} />
			<div id="title" className={styles.title} style={{ opacity: 0 }}>
				SG.
			</div>
		</div>
		</>
	);
};

export default SplashScreen;
