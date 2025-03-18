'use client';
import React from 'react';
import {
	AdvantagesSection,
	ContactSection,
	LandingSection,
} from '@/components/sections';
import Footer from '@/components/sections/FooterSection';

export default function Home() {
	return (
		<div>
			<main>
				<LandingSection />
				<AdvantagesSection />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}
