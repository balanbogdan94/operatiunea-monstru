'use client';

import React, { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './UnderWaterView.module.css';

interface UnderWaterViewProps {
	children: ReactNode;
	bubbleCount?: number;
	minSize?: number;
	maxSize?: number;
	showOnMobile?: boolean;
	className?: string;
}

/**
 * UnderWaterView - Componenta care adaugă un efect de vizualizare subacvatică cu bule animate
 * și permite orice componentă React ca și copil
 */
const UnderWaterView: React.FC<UnderWaterViewProps> = ({
	children,
	bubbleCount = 12,
	minSize = 20,
	maxSize = 70,
	showOnMobile = false,
	className = '',
}) => {
	const [bubbles, setBubbles] = useState<
		Array<{
			id: number;
			size: number;
			top: string;
			left: string;
			delay: number;
			duration: number;
			color: string;
		}>
	>([]);

	const [isDesktop, setIsDesktop] = useState(true);

	useEffect(() => {
		// Detectam tipul de dispozitiv
		const checkDevice = () => {
			setIsDesktop(window.innerWidth > 768);
		};

		checkDevice();
		window.addEventListener('resize', checkDevice);

		// Generăm culori diferite pentru bule pentru un aspect mai realist
		const bubbleColors = [
			'rgba(255, 255, 255, 0.4)',
			'rgba(173, 216, 230, 0.5)',
			'rgba(135, 206, 250, 0.4)',
			'rgba(176, 224, 230, 0.5)',
		];

		// Generăm bulele doar pe partea client pentru a evita probleme de hydration
		const newBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
			id: i,
			size: Math.random() * (maxSize - minSize) + minSize,
			top: `${Math.random() * 80}%`,
			left: `${Math.random() * 90}%`,
			delay: Math.random() * 3,
			duration: Math.random() * 4 + 4, // Între 4 și 8 secunde
			color: bubbleColors[Math.floor(Math.random() * bubbleColors.length)],
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

		return () => {
			clearInterval(interval);
			window.removeEventListener('resize', checkDevice);
		};
	}, [bubbleCount, minSize, maxSize]);

	// Verificăm dacă trebuie să afișăm bulele (pe desktop mereu, pe mobile doar dacă showOnMobile=true)
	const shouldShowBubbles = isDesktop || showOnMobile;

	return (
		<div className={`${styles.container} ${className}`}>
			{shouldShowBubbles && (
				<div className={styles.bubblesContainer}>
					{bubbles.map((bubble) => (
						<motion.div
							key={bubble.id}
							className={styles.bubbleWrapper}
							style={{
								top: bubble.top,
								left: bubble.left,
							}}
							initial={{ opacity: 0, scale: 0.5 }}
							animate={{
								opacity: 1,
								scale: 1,
								transition: {
									delay: bubble.delay,
									duration: 1,
								},
							}}
							transition={{
								duration: bubble.duration,
								ease: 'easeInOut',
							}}>
							<svg
								className={styles.bubble}
								width={bubble.size}
								height={bubble.size}
								viewBox='0 0 100 100'
								xmlns='http://www.w3.org/2000/svg'>
								<defs>
									<radialGradient
										id={`bubbleGradient${bubble.id}`}
										cx='30%'
										cy='30%'
										r='70%'
										fx='30%'
										fy='30%'>
										<stop offset='0%' stopColor='rgba(255, 255, 255, 0.8)' />
										<stop offset='100%' stopColor={bubble.color} />
									</radialGradient>
								</defs>
								<circle
									cx='50'
									cy='50'
									r='45'
									fill={`url(#bubbleGradient${bubble.id})`}
								/>
								<ellipse
									cx='35'
									cy='35'
									rx='15'
									ry='10'
									fill='rgba(255, 255, 255, 0.5)'
								/>
							</svg>
						</motion.div>
					))}
				</div>
			)}
			<div className={styles.content}>{children}</div>
		</div>
	);
};

export default UnderWaterView;
