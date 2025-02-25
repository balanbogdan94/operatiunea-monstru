import React from 'react';
import styles from './AdvantagesSection.module.css';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AdvantagesSection = () => {
	const variants = {
		initial: {},
		inView: {},
	};

	const h2Variants = {
		initial: { color: '#2a3541', scale: 0.7 },
		inView: { color: '#ffffff', scale: 1 },
	};

	const liVariants = {
		initial: { opacity: 0, y: 50 },
		inView: { opacity: 1, y: 0 },
	};
	return (
		<>
			<motion.div
				animate={variants}
				initial='initial'
				whileInView='inView'
				className={styles.root}
				variants={variants}
				viewport={{ amount: 0.2 }}>
				<motion.h2 variants={h2Variants} transition={{ duration: 0.3 }}>
					Descopera ce ti-am pregatit!
				</motion.h2>
				<motion.ul variants={variants}>
					<motion.li variants={liVariants} transition={{ duration: 0.3 }}>
						<motion.div
							style={{
								position: 'relative',
								width: '100%',
								aspectRatio: 16 / 12,
							}}>
							<Image
								style={{ borderRadius: 10 }}
								objectFit='cover'
								src={'/top-equpment.jpg'}
								alt={''}
								fill
							/>
						</motion.div>
						<h3>Echipamente de top</h3>
						<span style={{ textAlign: 'end' }}>
							Undițe, momeli, accesorii şi multe altele,
							<b style={{ fontSize: 16 }}> toate de calitate!</b>
						</span>
					</motion.li>
					<motion.li variants={liVariants} transition={{ duration: 0.3 }}>
						<div
							style={{
								position: 'relative',
								width: '100%',
								aspectRatio: 16 / 12,
							}}>
							<Image
								style={{ borderRadius: 10 }}
								objectFit='cover'
								src={'/nature-gear.jpg'}
								alt={''}
								fill
							/>
						</div>
						<h3>Produse pentru aventuri în natură</h3>
						<span>
							De la <b style={{ fontSize: 16 }}>îmbrăcăminte outdoor</b> la{' '}
							<b style={{ fontSize: 16 }}>gadgeturi utile.</b>
						</span>
					</motion.li>
					<motion.li>
						<div
							style={{
								position: 'relative',
								width: '100%',
								aspectRatio: 16 / 12,
							}}>
							<Image
								style={{ borderRadius: 10 }}
								objectFit='cover'
								src={'/consulting.jpg'}
								alt={''}
								fill
							/>
						</div>
						<h3>Consiliere dedicata</h3>
						<span style={{ textAlign: 'start' }}>
							Echipa noastră pasionată te va ajuta să alegi{' '}
							<b style={{ fontSize: 16 }}>exact ce îți trebuie!</b>
						</span>
					</motion.li>
				</motion.ul>
			</motion.div>
			<svg
				height='100%'
				width='100%'
				style={{ marginTop: '-5px' }}
				viewBox='0 0 868 134'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					d='M0 134C94.2031 62.6385 254.985 15.6285 437.5 15.6285C615.57 15.6285 772.953 60.3768 868 128.83V0.62854L0 0.62854V134Z'
					fill='#395e7c'
				/>
			</svg>
		</>
	);
};

export default AdvantagesSection;
