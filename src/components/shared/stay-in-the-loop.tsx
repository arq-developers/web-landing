"use client";

import {
	Broadcast,
	YoutubeLogo,
	InstagramLogo,
	FacebookLogo,
} from "@phosphor-icons/react";

export default function StayInTheLoop() {
	const socialMedias = [
		{
			icon: <Broadcast size={24} weight="fill" color="#f7cb2d" />,
			href: "#",
			label: "Podcast",
		},
		{
			icon: <YoutubeLogo size={24} weight="fill" color="#f7cb2d" />,
			href: "#",
			label: "YouTube",
		},
		{
			icon: <InstagramLogo size={24} weight="fill" color="#f7cb2d" />,
			href: "#",
			label: "Instagram",
		},
		{
			icon: <FacebookLogo size={24} weight="fill" color="#f7cb2d" />,
			href: "#",
			label: "Facebook",
		},
	];

	return (
		<section className="w-full py-24 flex flex-col items-center justify-center text-center gap-3 bg-blue-dark">
			<div className="flex flex-col items-center justify-center gap-1">
				<span className="font-montserrat text-yellow-dark font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
					Stay in the Loop
				</span>
				<span className="text-white-soft text-sm md:text-base font-medium leading-tight">
					Make sure to join our social media pages!
				</span>
			</div>

			<div className="flex gap-2 sm:gap-4 mt-2">
				{socialMedias.map((media) => (
					<a
						key={media.label}
						href={media.href}
						aria-label={media.label}
						className="opacity-65 hover:opacity-100 transition-all duration-300"
					>
						{media.icon}
					</a>
				))}
			</div>
		</section>
	);
}
