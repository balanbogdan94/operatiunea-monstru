'use client';
import { useState, useEffect } from 'react';
import styles from './Bubbles.module.css';

export const Bubbles = ({ count = 12 }) => {
	const [bubbles, setBubbles] = useState<
		Array<{
			id: number;
			size: number;
			top: string;
			left: string;
			color: string;
		}>
	>([]);
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
		
		// Culori pentru bule
		const colors = ['rgba(135, 206, 250, 0.3)', 'rgba(176, 224, 230, 0.2)'];

		// Generăm bulele
		const newBubbles = Array.from({ length: count }, (_, i) => ({
			id: i,
			size: Math.random() * 200 + 20,
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

	// Only render bubbles on the client side after component has mounted
	if (!isMounted) return null;

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
}
