'use client';
import React from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';
import { motion } from 'framer-motion';

const LandingSection = () => {
	// const callToActionText = React.useRef(null);
	// const controls = useAnimation();
	// const inView = useInView(callToActionText);

	// useEffect(() => {
	// 	if (inView) {
	// 		controls.start('hiddenHero');
	// 		controls.start('visible');
	// 	} else {
	// 		controls.start('visibleHero');
	// 		controls.start('hidden');
	// 	}
	// }, [controls, inView]);

	return (
		<div className={styles.root}>
			<motion.div
				className={styles.logo}
				initial={{ width: '30%', rotate: 0 }}
				animate={{ width: '100%', rotate: 360 }}
				transition={{ duration: 1, type: 'spring', stiffness: 100 }}>
				<BrandLogo />
			</motion.div>
			<motion.div
				className={styles.landingText}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}>
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
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
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
