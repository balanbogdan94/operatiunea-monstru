'use client';
import React, { useEffect, useState } from 'react';
import BrandLogo from '../common/Logo';
import styles from './LandingSection.module.css';
import SocialMediaIcons from '../common/SocialMedia';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// Component pentru bule
const Bubbles = ({ count = 12 }) => {
	const [bubbles, setBubbles] = useState<
		Array<{
			id: number;
			size: number;
			top: string;
			left: string;
			color: string;
		}>
	>([]);

	useEffect(() => {
		// Culori pentru bule
		const colors = [
			'rgba(255, 255, 255, 0.5)',
			'rgba(173, 216, 230, 0.6)',
			'rgba(135, 206, 250, 0.5)',
			'rgba(176, 224, 230, 0.6)',
		];

		// Generăm bulele
		const newBubbles = Array.from({ length: count }, (_, i) => ({
			id: i,
			size: Math.random() * 50 + 20, // Între 20px și 70px
			top: `${Math.random() * 80}%`,
			left: `${Math.random() * 90}%`,
			color: colors[Math.floor(Math.random() * colors.length)],
		}));

		setBubbles(newBubbles);

		// Schimbăm pozițiile bulelor la intervale aleatorii
		const interval = setInterval(() => {
			setBubbles((prev) =>
				prev.map((bubble) => ({
					...bubble,
					top: `${Math.random() * 80}%`,
					left: `${Math.random() * 90}%`,
				})),
			);
		}, 5000);

		return () => clearInterval(interval);
	}, [count]);

	return (
		<div className={styles.bubblesContainer}>
			{bubbles.map((bubble) => (
				<div
					key={bubble.id}
					className={styles.bubble}
					style={{
						width: `${bubble.size}px`,
						height: `${bubble.size}px`,
						top: bubble.top,
						left: bubble.left,
						background: `radial-gradient(circle at 30% 30%, white, ${bubble.color})`,
					}}
				/>
			))}
		</div>
	);
};

const LandingSection = () => {
	const { scrollY, scrollYProgress } = useScroll();
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		// Detectam tipul de dispozitiv
		const checkDevice = () => {
			setIsDesktop(window.innerWidth > 768);
		};

		checkDevice();
		window.addEventListener('resize', checkDevice);

		return () => {
			window.removeEventListener('resize', checkDevice);
		};
	}, []);

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
			{isDesktop && <Bubbles />}

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
					viewBox='0 0 868 134'
					preserveAspectRatio='none'
					width='100%'
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
