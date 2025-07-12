"use client";
import Image from "next/image";

export default function ARQ() {
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
		<div className="gap-8 w-full h-full px-8 py-16 lg:px-16 flex flex-col justify-center items-center text-center transition-all duration-300 text-black">
			<div className="font-montserrat flex flex-col items-center justify-center">
				<span className="text-blue font-bold text-xl sm:text-2xl md:text-3xl">
					What is ARQ?
				</span>
				<div className="max-w-6xl text-sm sm:text-base">
					ARQ is a 3-month, one-on-one discipleship journey designed to be{" "}
					<span className="font-semibold">Spirit-led</span>,{" "}
					<span className="font-semibold">relational</span>,{" "}
					<span className="font-semibold">actionable</span>.
				</div>
			</div>

			<div className="flex items-center justify-center gap-8 text-sm sm:text-base">
				<div className="flex flex-col items-center justify-center gap-2">
					<Image
						src="/images/arq/arq-blue-logo.png"
						alt="Hero Image"
						width={150}
						height={150}
						quality={100}
					/>
					<Image
						src="/images/arq/arq-blue-logo-name.png"
						alt="Hero Image"
						width={125}
						height={125}
						quality={100}
					/>
				</div>
				<div className="flex flex-col items-start justify-center border-l-4 border-l-yellow-dark rounded-sm pl-4 cursor-default text-left">
					<span>
						It’s not a curriculum.{" "}
						<span className="font-semibold">It’s a conversation.</span>
					</span>
					<span>
						It’s not just theology.{" "}
						<span className="font-semibold">It’s transformation.</span>
					</span>
					<span>
						It’s not just church.{" "}
						<span className="font-semibold">
							It’s life-on-life discipleship.
						</span>
					</span>
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 w-full lg:w-auto gap-4 justify-items-center mt-6">
				{arq.map((arq, index) => (
					<div
						key={index}
						className="bg-white rounded-sm shadow-lg flex flex-col justify-start items-center p-8 gap-2 w-full cursor-default hover:shadow-blue/45 transition-all duration-300 group hover:bg-blue-dark"
					>
						<div className="flex flex-col justify-center items-center">
							<div className="font-montserrat text-yellow-dark font-bold text-2xl sm:text-3xl group-hover:text-white-soft transition-colors duration-300">
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
			<div className="font-semibold text-center w-full max-w-3xl text-sm sm:text-base">
				Whether you’re a student, parent, entrepreneur, or leader—you can
				facilitate or join the ARQ journey. No pulpit needed.
			</div>
		</div>
	);
}
