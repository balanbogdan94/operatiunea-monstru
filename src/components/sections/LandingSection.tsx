'use client';
import React, { useEffect } from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';
import { motion, useAnimation, useInView } from 'framer-motion';

const LandingSection = () => {
	const callToActionText = React.useRef(null);
	const controls = useAnimation();
	const inView = useInView(callToActionText);

	useEffect(() => {
		if (inView) {
			controls.start('hiddenHero');
			controls.start('visible');
		} else {
			controls.start('visibleHero');
			controls.start('hidden');
		}
	}, [controls, inView]);

	return (
		<div className={styles.root}>
			<BrandLogo className={styles.logo} />
			<motion.div
				className={styles.landingText}
				initial={{ opacity: 0 }}
				animate={controls}
				variants={{
					visibleHero: { opacity: 100, y: 0 },
					hiddenHero: { opacity: 0, y: -20 },
				}}
				transition={{ duration: 0.2 }}>
				<h1 id='scrollText'>Operatiunea Monstrul</h1>
				<h2>
					Magazinul tau de pescuit si outdoor din{' '}
					<span className={styles.highlightText}>Brasov!</span>
				</h2>
				<SocialMediaIcons />
			</motion.div>
			<motion.div
				className={styles.callToAction}
				initial={{ opacity: 0 }}
				animate={controls}
				ref={callToActionText}
				variants={{
					visible: { opacity: 1, y: 0 },
					hidden: { opacity: 0, y: 100 },
				}}
				transition={{ duration: 0.2 }}>
				<h2>
					Fă din fiecare ieșire pe{' '}
					<span className={styles.highlightText}>apă</span> o aventură{' '}
					<span className={styles.highlightText}>legendară!</span>
				</h2>
			</motion.div>
		</div>
	);
};

export default LandingSection;
