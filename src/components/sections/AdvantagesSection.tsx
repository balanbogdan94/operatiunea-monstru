import React, { useState, useEffect } from 'react';
import styles from './AdvantagesSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

const AdvantagesSection = () => {
	// State to track if component has mounted (client-side)
	const [isMounted, setIsMounted] = useState(false);

	// Always call hooks at the top level
	const isDesktopRaw = useMediaQuery({ minWidth: 768 });

	// Handle clientside hydration
	useEffect(() => {
		setIsMounted(true);
	}, []);

	// Only apply desktop styles after client-side hydration
	const isDesktop = isMounted && isDesktopRaw;

	const variants = {
		initial: {},
		inView: {},
	};

	const h2Variants = {
		initial: { color: '#395e7c', scale: 0.7 },
		inView: { color: '#395e7c', scale: 1 },
	};

	const liVariants = {
		initial: { opacity: 0 },
		inView: { opacity: 1, x: 0 },
	};

	// Hover effect for list items
	const hoverEffect = {
		scale: 1.1,
		rotate: 0, // Reset rotation on hover
		boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
		transition: {
			duration: 0.5,
			type: 'spring',
			stiffness: 100,
			damping: 10,
		},
	};

	// First item rotation (5 degrees on desktop)
	const firstItemStyle = isDesktop ? { rotate: -5 } : {};

	// Last item rotation (5 degrees on desktop)
	const lastItemStyle = isDesktop ? { rotate: 5 } : {};

	return (
		<>
			<motion.div
				animate={variants}
				initial='initial'
				whileInView='inView'
				className={styles.root}
				variants={variants}
				viewport={{ amount: 0.2 }}>
				<div className={styles.title}>
					<motion.h2 variants={h2Variants} transition={{ duration: 0.3 }}>
						Descopera ce ti-am pregatit!
					</motion.h2>
					<motion.p
						variants={h2Variants}
						transition={{ duration: 0.3 }}
						style={{ marginBottom: 20 }}>
						Produse și servicii de calitate pentru pasionații de pescuit și
						aventură în natură.
					</motion.p>
				</div>
				<motion.ul variants={variants}>
					<motion.li
						style={isMounted ? firstItemStyle : {}}
						variants={liVariants}
						transition={{ duration: 0.5 }}
						whileHover={hoverEffect}>
						<motion.div
							style={{
								position: 'relative',
								width: '100%',
								aspectRatio: 16 / 12,
							}}>
							<Image
								style={{ borderRadius: 10, objectFit: 'cover' }}
								src={'/top-equpment.jpg'}
								alt={''}
								fill
								priority={false}
							/>
						</motion.div>
						<h3>Echipamente de top</h3>
						<span>
							Undițe, momeli, accesorii şi multe altele,
							<b style={{ fontSize: 16 }}> toate de calitate!</b>
						</span>
					</motion.li>
					<motion.li
						variants={liVariants}
						transition={{ duration: 0.3 }}
						whileHover={hoverEffect}>
						<div
							style={{
								position: 'relative',
								width: '100%',
								aspectRatio: 16 / 12,
							}}>
							<Image
								style={{ borderRadius: 10, objectFit: 'cover' }}
								src={'/nature-gear.jpg'}
								alt={''}
								fill
								priority={false}
							/>
						</div>
						<h3>Produse pentru aventuri în natură</h3>
						<span>
							De la <b style={{ fontSize: 16 }}>îmbrăcăminte outdoor</b> la{' '}
							<b style={{ fontSize: 16 }}>gadgeturi utile.</b>
						</span>
					</motion.li>
					<motion.li
						style={isMounted ? lastItemStyle : {}}
						variants={liVariants}
						transition={{ duration: 0.3 }}
						whileHover={hoverEffect}>
						<div
							style={{
								position: 'relative',
								width: '100%',
								aspectRatio: 16 / 12,
							}}>
							<Image
								style={{ borderRadius: 10, objectFit: 'cover' }}
								src={'/consulting.jpg'}
								alt={''}
								fill
								priority={false}
							/>
						</div>
						<h3>Consiliere dedicata</h3>
						<span>
							Echipa noastră pasionată te va ajuta să alegi{' '}
							<b style={{ fontSize: 16 }}>exact ce îți trebuie!</b>
						</span>
					</motion.li>
				</motion.ul>
			</motion.div>
		</>
	);
};

export default AdvantagesSection;
