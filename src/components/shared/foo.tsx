"use client";

import {
	Broadcast,
	YoutubeLogo,
	InstagramLogo,
	FacebookLogo,
} from "@phosphor-icons/react";

export default function StayInTheLoop() {
	return (
		<section className="w-full py-16 flex flex-col items-center justify-center bg-white text-center gap-3">
			<h2 className="text-2xl sm:text-3xl font-bold text-[#1a2e66]">
				Stay in the Loop
			</h2>
			<p className="text-sm sm:text-base text-gray-700">
				Make sure to join our social media pages
			</p>
			<div className="flex gap-4 mt-2">
				<a href="#" aria-label="Podcast">
					<Broadcast size={28} weight="fill" color="#f7b100" />
				</a>
				<a href="#" aria-label="YouTube">
					<YoutubeLogo size={28} weight="fill" color="#f7b100" />
				</a>
				<a href="#" aria-label="Instagram">
					<InstagramLogo size={28} weight="fill" color="#f7b100" />
				</a>
				<a href="#" aria-label="Facebook">
					<FacebookLogo size={28} weight="fill" color="#f7b100" />
				</a>
			</div>
		</section>
	);
}
