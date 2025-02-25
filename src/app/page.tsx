'use client';
import React from 'react';
import styles from './page.module.css';
import {
	AdvantagesSection,
	ContactSection,
	LandingSection,
} from '@/components/sections';

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<LandingSection />
				<AdvantagesSection />
				<ContactSection />
			</main>
			<footer className={styles.footer}>TEST</footer>
		</div>
	);
}
