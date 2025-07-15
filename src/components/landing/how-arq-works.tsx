"use client";

import Image from "next/image";
import { Phone, Coffee } from "@phosphor-icons/react";

export default function HowArqWorks() {
	const arqProcess = [
		{
			step: "1",
			description: "Train 50–100 ARQ facilitators in one city.",
		},
		{
			step: "2",
			description:
				"Each facilitator commits to meet with 3 people, once a week for 3 months.",
		},
		{
			step: "3",
			description:
				"After 3 months, those 3 people are trained to become facilitators themselves.",
		},
		{
			step: "4",
			description:
				"This creates a multiplying chain of 1-on-1 transformation—with high relational value and zero cost.",
		},
		{
			icon: <Phone size={30} weight="fill" color="#f7b100" />,
			description:
				"Facilitators are guided with simple digital tools (videos, prompts, guides).",
		},
		{
			icon: <Coffee size={30} weight="fill" color="#f7b100" />,
			description:
				"Meetings happen in homes, cafes, co-working spaces, or online.",
		},
	];

	return (
		<div className="gap-8 md:gap-12 w-full h-full px-8 py-32 lg:px-16 flex flex-col justify-center items-center text-center transition-all duration-300 text-black bg-">
			<div className="font-montserrat flex flex-col items-center justify-center">
				<span className="text-blue font-bold text-xl sm:text-2xl md:text-3xl">
					How ARQ Works?
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium">
					Plug-and-Play Discipleship System That Multiplies
				</span>
			</div>

			<div className="flex flex-col md:flex-row items-stretch justify-center h-auto gap-8 lg:gap-10 w-full">
				<div className="relative h-56 md:h-auto bg-[url('/images/hero/474663832_1269361440788485_8472831950214551439_n.jpg')] bg-cover bg-center bg-no-repeat rounded-sm w-full md:max-w-xs">
					<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/50 to-blue w-full h-full rounded-sm"></div>
				</div>
				<div className="flex flex-col gap-4 w-full max-w-2xl">
					{arqProcess.map((item, index) => (
						<div
							key={index}
							className={`transition-all duration-300 flex items-center justify-start gap-2 p-4 sm:p-6 rounded-sm shadow-lg cursor-default group ${
								item.step
									? "bg-white hover:bg-blue-dark"
									: "bg-blue hover:bg-white"
							}`}
						>
							{item.step ? (
								<div className="w-8 h-8 flex-shrink-0 flex items-center justify-center flex-col text-yellow-dark font-bold text-2xl font-montserrat">
									{item.step}
								</div>
							) : (
								<div className="w-8 h-8 flex-shrink-0 flex items-center justify-center flex-col">
									{item.icon}
								</div>
							)}
							<div
								className={`text-sm sm:text-base text-left pr-4 min-w-0 flex-1 ${
									item.step
										? "text-black group-hover:text-white-soft"
										: "text-white-soft group-hover:text-black"
								}`}
							>
								{item.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
