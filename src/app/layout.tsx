import type { Metadata } from 'next';
import './../styles/globals.css';
import { alfaSlabOne, montserrat } from '@/styles/fonts';
import { PropsWithChildren } from 'react';
import { PageViewTracker } from '@/components/common/PageViewTracker';

export const metadata: Metadata = {
	title: 'Operatiunea Monstru',
	description: 'Magazinul tau de pescuit si outdoor din Brasov!',
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang='en'>
			<body className={`${montserrat.variable} ${alfaSlabOne.variable}`}>
				{children}
				<PageViewTracker />
			</body>
		</html>
	);
};

export default RootLayout;
