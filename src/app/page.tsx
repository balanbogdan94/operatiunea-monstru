'use client';
import LandingSection from '@/components/sections/LandingSection';
import styles from './page.module.css';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<motion.div className={styles.page}>
			<main className={styles.main}>
				<LandingSection />

				<AdvantagesSection />

				<ContactSection />
			</main>
			<footer className={styles.footer}>TEST</footer>
		</motion.div>
	);
}
