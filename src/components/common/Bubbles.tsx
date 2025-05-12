import styles from './Bubbles.module.css';

const getRandomWidth = () => Math.floor(Math.random() * 100) + 50;
const getRandomColor = () => {
	const colors = [
		'rgba(163, 223, 255, 0.5)',
		'rgba(127, 200, 248, 0.5)',
		'rgba(91, 174, 230, 0.5)',
		'rgba(58, 148, 214, 0.5)',
		'rgba(33, 122, 181, 0.5)',
	];
	return colors[Math.floor(Math.random() * colors.length)];
};
const getRandomPosition = () => {
	const x = Math.floor(Math.random() * 100);
	const y = Math.floor(Math.random() * 100);
	return {
		top: `${y}%`,
		left: `${x}%`,
	};
};

export const Bubbles = ({ count = 12 }) => {
	return (
		<div className={styles.bubblesContainer}>
			{Array.from({ length: count }).map((bubble, index) => (
				<div
					key={index}
					className={styles.bubble}
					style={{
						width: `${getRandomWidth()}px`,
						top: getRandomPosition().top,
						left: getRandomPosition().left,
						background: `radial-gradient(circle at 30% 30%, white, ${getRandomColor()})`,
					}}
				/>
			))}
		</div>
	);
};
