'use client';
import LandingSection from '@/components/sections/LandingSection';
import styles from './page.module.css';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
	const { scrollYProgress } = useScroll();
	const background = useTransform(
		scrollYProgress,
		[0, 0.5],
		[
			'linear-gradient(to top, #a1c4fd 0%, #c2e9fb 100%)',
			'linear-gradient(to top, #feada6 0%, #f5efef 100%)',
		],
	);
	return (
		<motion.div
			className={styles.page}
			style={{ background: background }}
			transition={{ duration: 0.5, type: 'spring' }}>
			<main className={styles.main}>
				<LandingSection />

				<AdvantagesSection />

				<ContactSection />
			</main>
			<footer className={styles.footer}>TEST</footer>
		</motion.div>
	);
}
