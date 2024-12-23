'use client';
import LandingSection from '@/components/sections/LandingSection';
import styles from './page.module.css';
import AdvantagesSection from '@/components/sections/AdvantagesSection';
import { motion, useAnimation, useInView } from 'framer-motion';
import React from 'react';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
	const advantageSection = React.useRef(null);
	const controls = useAnimation();
	const inView = useInView(advantageSection);

	React.useEffect(() => {
		if (inView) {
			controls.start('visible');
		} else {
			controls.start('hidden');
		}
	}, [controls, inView]);

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<motion.div
					initial={{ opacity: 1 }}
					animate={controls}
					variants={{
						visible: { opacity: 0 },
						hidden: { opacity: 1 },
					}}
					transition={{ duration: 0.2 }}>
					<LandingSection />
				</motion.div>
				<motion.div
					ref={advantageSection}
					initial={{ opacity: 0 }}
					animate={controls}
					variants={{
						visible: { opacity: 1 },
						hidden: { opacity: 0 },
					}}
					transition={{ duration: 0.2 }}>
					<AdvantagesSection />
					<ContactSection />
				</motion.div>
				{/* <motion.div
					className={styles.contact}
					initial={{ opacity: 0 }}
					animate={controls}
					variants={{
						visible: { opacity: 0, y: 100 },
						hidden: { opacity: 1 },
					}}
					style={{ width: '100%', minHeight: '100vh', zIndex: 100000 }}
					transition={{ duration: 0.2 }}>
					<ContactSection />
				</motion.div> */}
			</main>
			<footer className={styles.footer}></footer>
		</div>
	);
}
