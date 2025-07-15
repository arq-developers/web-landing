"use client";

import Link from "next/link";
import { ShieldCheck } from "@phosphor-icons/react";

export default function WhyItMatters() {
	const stat = [
		{
			title:
				"65% of Christians say they feel unequipped to share their faith, especially in secular spaces.",
			source: "(Barna Group)",
		},
		{
			title:
				"Over 1 million Filipinos leave the institutional church annually, not because they stop believing—but because they feel unseen, unengaged, and under-equipped.",
			source: "(Pew Forum / National Church Data)",
		},
		{
			title:
				"Most discipleship models are classroom-style and one-directional—leaving no room for honest conversations, personal questions, or relational growth.",
			source: null,
		},
	];

	return (
		<section
			id="why-it-matters"
			className="w-full pt-24 px-8 md:px-16 bg-[#1a2e66] scroll-mt-28 flex flex-col justify-center items-center gap-12"
		>
			<div className="flex flex-col items-center justify-center gap-4">
				<span className="font-montserrat text-yellow-light font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
					Why It Matters
				</span>
				<span className="text-white-soft text-sm sm:text-base font-medium leading-tight">
					Many Christians love Jesus but feel stuck in their faith
					journey—especially at work and at home.
				</span>
			</div>

			<div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-stretch">
				<div className="flex-1 flex flex-col gap-4">
					{stat.map((item, index) => (
						<div
							key={index}
							className="bg-blue border-l-4 border-yellow-dark pl-4 py-2 rounded-sm text-white-soft text-left text-sm sm:text-base"
						>
							<p className="font-medium">{item.title}</p>
							{item.source && (
								<em className="italic opacity-75 hover:opacity-100 hover:text-yellow-dark transition-all duration-300">
									{item.source}
								</em>
							)}
						</div>
					))}
				</div>

				<div className="flex-1 flex justify-center items-center">
					<div className="bg-white text-[#1E2A5A] p-8 rounded-sm shadow-lg flex flex-col items-center justify-center text-center max-w-auto md:max-w-md w-full gap-2 md:gap-4 h-full scale-100 hover:scale-102 transition-all duration-200">
						<ShieldCheck size={42} weight="fill" color="#f7b100" />
						<h3 className="font-bold text-lg sm:text-xl font-montserrat w-full max-w-72">
							ARQ EXISTS TO BRIDGE THAT GAP.
						</h3>
						<p className="text-sm sm:text-base">
							We believe discipleship is not an event—it’s a lifestyle that
							multiplies when believers are empowered, heard, and equipped.
						</p>
						<Link
							href="/WhyItMatters"
							className="text-yellow-dark font-semibold border-b-2 border-b-transparent hover:border-b-yellow-dark text-sm sm:text-base transition-all duration-300 cursor-pointer"
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
