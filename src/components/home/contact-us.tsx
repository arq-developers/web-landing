"use client";

import {
	Broadcast,
	YoutubeLogo,
	InstagramLogo,
	FacebookLogo,
} from "@phosphor-icons/react";

import { ContactForm } from "@/components/home";

export default function ContactUs() {
	const socialMedias = [
		{
			icon: <Broadcast size={24} weight="fill" color="#f7b100" />,
			href: "#",
			label: "Podcast",
		},
		{
			icon: <YoutubeLogo size={24} weight="fill" color="#f7b100" />,
			href: "#",
			label: "YouTube",
		},
		{
			icon: <InstagramLogo size={24} weight="fill" color="#f7b100" />,
			href: "#",
			label: "Instagram",
		},
		{
			icon: <FacebookLogo size={24} weight="fill" color="#f7b100" />,
			href: "#",
			label: "Facebook",
		},
	];
	return (
		<div className="w-full h-full pb-42 pt-24 px-8 lg:px-16 flex flex-col justify-center items-center text-center gap-8 md:gap-12 transition-all duration-300 bg-gray/10 backdrop-blur">
			<div className="w-full max-w-7xl flex flex-col md:flex-row justify-start items-start gap-16 ">
				<div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-8">
					<div className="font-montserrat flex flex-col items-center md:items-start justify-center gap-1">
						<span className="text-blue-dark font-bold text-2xl md:text-4xl leading-tight">
							Contact Us
						</span>
						<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
							We'd love to hear from you!
						</span>
					</div>
					<div className="text-sm sm:text-base text-center md:text-left">
						Whether you’re curious about ARQ, want to start a group, support our
						mission, or just have a question—we’re just a message away.
					</div>
					<div className="flex flex-wrap md:flex-col justify-center items-center md:items-start gap-3 md:gap-2 mt-2">
						{socialMedias.map((media) => (
							<a
								key={media.label}
								href={media.href}
								aria-label={media.label}
								className="opacity-80 hover:opacity-100 transition-all duration-300"
							>
								<span className="flex items-center gap-1 md:gap-2 text-sm sm:text-base">
									{media.icon} {media.label}
								</span>
							</a>
						))}
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
