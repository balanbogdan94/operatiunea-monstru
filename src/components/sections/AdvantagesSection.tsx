import React from 'react';
import styles from './AdvantagesSection.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHiking, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AdvantagesSection = () => {
	const variants = {
		initial: {},
		inView: {},
	};

	const h2Variants = {
		initial: { scale: 1 },
		inView: { scale: 0.8 },
	};

	const getUlVariants = (index: number) => ({
		initial: {
			x: -300,
			rotate: !index ? 0 : index % 2 === 0 ? 10 : -10,
		},
		inView: { y: 0, rotate: 0, x: 0 },
	});
	return (
		<motion.div
			animate={variants}
			initial='initial'
			whileInView='inView'
			className={styles.root}
			variants={variants}
			viewport={{ amount: 0.7, once: true }}>
			<motion.h2 variants={h2Variants} transition={{ duration: 0.2 }}>
				Descopera ce ti-am pregatit!
			</motion.h2>
			<motion.ul variants={variants}>
				<motion.li variants={getUlVariants(0)} transition={{ duration: 0.5 }}>
					<div
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
					</div>
					<h3>Echipamente de top</h3>
					<span style={{ textAlign: 'end' }}>
						Undițe, momeli, accesorii şi multe altele,
						<b style={{ fontSize: 16 }}> toate de calitate!</b>
					</span>
				</motion.li>
				<motion.li variants={getUlVariants(1)} transition={{ duration: 0.2 }}>
					<FontAwesomeIcon icon={faHiking} />
					<h3>Produse pentru aventuri în natură</h3>
					<span>De la îmbrăcăminte outdoor la gadgeturi utile.</span>
				</motion.li>
				<motion.li variants={getUlVariants(2)} transition={{ duration: 0.4 }}>
					<FontAwesomeIcon icon={faUserFriends} />
					<h3>Consiliere dedicata</h3>
					<span>
						Echipa noastră pasionată te va ajuta să alegi exact ce îți trebuie!
					</span>
				</motion.li>
			</motion.ul>
		</motion.div>
	);
};

export default AdvantagesSection;
