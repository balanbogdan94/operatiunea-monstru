'use client';
import React from 'react';
import {
	AdvantagesSection,
	ContactSection,
	LandingSection,
} from '@/components/sections';

export default function Home() {
	return (
		<div>
			<main>
				<LandingSection />
				<AdvantagesSection />
				<ContactSection />
			</main>
			<footer>TEST</footer>
		</div>
	);
}
