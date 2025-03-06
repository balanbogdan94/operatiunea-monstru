import React from 'react';
import styles from './ContactSection.module.css';
import { motion } from 'framer-motion';

const ContactSection = () => {
	return (
		<section className={styles.contactSection}>
			<motion.svg viewBox='0 0 868 134' xmlns='http://www.w3.org/2000/svg'>
				<motion.path
					d='M0 134C94.2031 62.6385 254.985 15.6285 437.5 15.6285C615.57 15.6285 772.953 60.3768 868 128.83V0.62854L0 0.62854V134Z'
					fill='#395e7c'
				/>
			</motion.svg>
			<h2>Unde ne gasesti</h2>
			<div className={styles.mapContainer}>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2788.1688131407714!2d25.606211376285085!3d45.66751127107806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35bed41decc07%3A0xc9150009ba9a1a1f!2sBloc%204%2C%20Aleea%20Constructorilor%204%2C%20Bra%C8%99ov%20507190!5e0!3m2!1sen!2sro!4v1734977702471!5m2!1sen!2sro'
					width='600'
					height='450'
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				/>
			</div>
			<h2>Contactează-ne</h2>
			<form className={styles.contactForm}>
				<div className={styles.formGroup}>
					<label htmlFor='name'>Nume</label>
					<input type='text' id='name' name='name' required />
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' name='email' required />
				</div>
				<div className={styles.formGroup}>
					<label htmlFor='message'>Mesaj</label>
					<textarea id='message' name='message' rows={5} required></textarea>
				</div>
				<button type='submit' className={styles.submitButton}>
					Trimite
				</button>
			</form>

			<h3>Program de funcționare</h3>
			<div className={styles.hours}>
				<p>Luni - Vineri: 09:00 - 18:00</p>
				<p>Sâmbătă: 10:00 - 14:00</p>
				<p>Duminică: Închis</p>
			</div>
		</section>
	);
};

export default ContactSection;
