"use client";
import Link from "next/link";
import { ShieldCheck } from "@phosphor-icons/react";

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

const Stats = ({ title, source }: { title: string; source: string | null }) => (
	<div className="bg-[#1a2e66] border-l-4 border-yellow-400 pl-4 py-2 text-white text-left text-sm sm:text-base leading-relaxed">
		<p className="font-semibold">{title}</p>
		{source && <em className="italic text-gray-200">{source}</em>}
	</div>
);

export default function WhyItMatters() {
	return (
		<section
			id="why-it-matters"
			className="w-full px-6 py-24 lg:px-16 bg-[#1a2e66] scroll-mt-28 flex flex-col justify-center items-center gap-12"
		>
			<div className="flex flex-col items-center text-center gap-2">
				<h2 className="text-yellow-400 text-3xl sm:text-4xl font-bold font-montserrat">
					Why It Matters
				</h2>
				<p className="text-white text-sm sm:text-lg max-w-2xl">
					Many Christians love Jesus but feel stuck in their faith
					journey—especially at work and at home.
				</p>
			</div>

			<div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl">
				<div className="flex-1 flex flex-col gap-4">
					{stat.map((item, index) => (
						<Stats key={index} title={item.title} source={item.source} />
					))}
				</div>

				<div className="flex-1 flex justify-center items-center">
					<div className="bg-white text-[#1E2A5A] p-6 sm:p-8 rounded-xl shadow-lg flex flex-col items-center text-center max-w-md w-full gap-4">
						<ShieldCheck size={40} weight="fill" color="#f7b100" />
						<h3 className="font-bold text-base sm:text-lg">
							ARQ EXISTS TO BRIDGE THAT GAP.
						</h3>
						<p className="text-sm sm:text-base">
							We believe discipleship is not an event—it’s a lifestyle that
							multiplies when believers are empowered, heard, and equipped.
						</p>
						<Link
							href="/WhyItMatters"
							className="text-yellow-500 font-semibold hover:underline text-sm sm:text-base"
						>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
