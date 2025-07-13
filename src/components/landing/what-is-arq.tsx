"use client";
import Image from "next/image";

export default function WhatIsARQ() {
	const arq = [
		{
			letter: "A",
			title: "Actionable Faith",
			description: "Not just theory, but practice.",
		},
		{
			letter: "R",
			title: "Relational Growth",
			description: "Done in community.",
		},
		{
			letter: "Q",
			title: "Questions that go deep",
			description: "Conversations that spark change.",
		},
	];

	return (
		<div className="w-full">
			<div className="bg-gradient-to-b from-blue via-blue/80 to-transparent w-svw h-72 rounded-sm"></div>
			<div className="gap-8 w-full h-full px-8 pt-16 lg:px-16 flex flex-col justify-center items-center text-center transition-all duration-300 text-black">
				<div className="font-montserrat flex flex-col items-center justify-center">
					<span className="text-blue font-bold text-xl sm:text-2xl md:text-3xl">
						What is ARQ?
					</span>
					<span className="text-gray text-base sm:text-lg md:text-xl font-medium">
						A Spirit-led, Relational, and Actionable 3-Month Journey
					</span>
				</div>
				<div className="max-w-6xl text-sm sm:text-base">
					It’s not a curriculum. It’s a conversation. It’s not just theology.
					It’s transformation. It’s not just church. It’s life-on-life
					discipleship. Whether you’re a student, parent, entrepreneur, or
					leader—you can facilitate or join the ARQ journey. No pulpit needed.
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-auto gap-4 justify-items-center">
					{arq.map((arq, index) => (
						<div
							key={index}
							className="bg-white rounded-sm shadow-lg flex flex-col justify-start items-center p-4 sm:p-8 gap-2 w-full cursor-default hover:shadow-blue/45 transition-all duration-300 group hover:bg-blue-dark"
						>
							<div className="flex flex-col justify-center items-center">
								<div className="font-montserrat text-yellow-dark font-bold text-2xl sm:text-3xl">
									{arq.letter}
								</div>
								<div className="font-montserrat text-blue font-bold text-base sm:text-lg group-hover:text-white-soft transition-colors duration-300 leading-none">
									{arq.title}
								</div>
							</div>
							<div className="text-sm sm:text-base group-hover:text-white-soft transition-colors duration-300">
								{arq.description}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
