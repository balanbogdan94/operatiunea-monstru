import { Montserrat, Alfa_Slab_One } from 'next/font/google';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});

const alfaSlabOne = Alfa_Slab_One({
	variable: '--font-alfa-slab-one',
	subsets: ['latin'],
	weight: ['400'],
});

export { montserrat, alfaSlabOne };
