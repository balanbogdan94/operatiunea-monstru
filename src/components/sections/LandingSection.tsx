'use client';
import React from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

const LandingSection = () => {
	const { scrollY, scrollYProgress } = useScroll();
	const isMobile = useMediaQuery({ maxWidth: 768 });

	const background = useTransform(
		scrollYProgress,
		[0, 0.5],
		[
			'linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%)',
			'linear-gradient(to top,rgb(61, 103, 177) 0%,rgb(39, 117, 153) 100%)',
		],
	);

	const landingTextOpacity = useTransform(scrollY, [0, 200], [1, 0]);
	const logoOpacity = useTransform(scrollY, [400, 550], [1, 0]);
	const logoScale = useTransform(scrollY, [400, 550], [1, 0.5]);

	return (
		<motion.section
			className={styles.root}
			style={{ background }}
			transition={{ duration: 0.5, type: 'spring' }}>
			<motion.div
				className={styles.logo}
				initial={{ width: '30%', rotate: 0 }}
				animate={{ width: '100%', rotate: 360 }}
				style={
					isMobile ? { opacity: logoOpacity, scale: logoScale } : undefined
				}
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
			<div className={styles.bottomCircle}>
				<svg
					height='100%'
					width='100%'
					viewBox='0 0 868 134'
					preserveAspectRatio='xMidYMid meet'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M868 0.62854C773.797 71.9901 613.015 119 430.5 119C252.43 119 95.0469 74.2518 0 5.79834V134H868V0.62854Z'
						fill='#2a3541'
					/>
				</svg>
			</div>
		</motion.section>
	);
};

export default LandingSection;
