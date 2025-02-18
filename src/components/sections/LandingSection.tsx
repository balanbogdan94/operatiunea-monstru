'use client';
import React from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';
import { motion, useScroll, useTransform } from 'framer-motion';

const LandingSection = () => {
	const { scrollY } = useScroll();

	const landingTextOpacity = useTransform(scrollY, [0, 200], [1, 0]);
	const logoOpacity = useTransform(scrollY, [400, 550], [1, 0]);
	const logoScale = useTransform(scrollY, [400, 550], [1, 0.5]);

	return (
		<section className={styles.root}>
			<motion.div
				className={styles.logo}
				initial={{ width: '30%', rotate: 0 }}
				animate={{ width: '100%', rotate: 360 }}
				style={{ opacity: logoOpacity, scale: logoScale }}
				transition={{ duration: 1, type: 'spring', stiffness: 100 }}>
				<BrandLogo />
			</motion.div>
			<motion.div
				className={styles.landingText}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				style={{ opacity: landingTextOpacity }}
				transition={{ duration: 0.1 }}>
				<h1 id='scrollText'>Operatiunea Monstrul</h1>
				<h2>
					Magazinul tau de pescuit si outdoor din{' '}
					<span className={styles.highlightText}>Brasov!</span>
				</h2>
				<SocialMediaIcons />
			</motion.div>
			<motion.div className={styles.callToAction}>
				<h2>
					Fă din fiecare ieșire pe{' '}
					<span className={styles.highlightText}>apă</span> o aventură{' '}
					<span className={styles.highlightText}>legendară!</span>
				</h2>
			</motion.div>
		</section>
	);
};

export default LandingSection;
