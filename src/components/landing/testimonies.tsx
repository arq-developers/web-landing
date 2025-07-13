"use client";

import { Quotes } from "@phosphor-icons/react";

export default function Testimonies() {
	const testimonials = [
		{
			image: "/images/arq/arq-blue-logo.png",
			name: "JESSICA, MOM",
			location: "Bacolod",
			message:
				"Before ARQ, we didn't know how to talk about faith at home. Now, we can't stop.",
		},
		{
			image: "/images/arq/arq-blue-logo.png",
			name: "ARQ FACILITATOR, KARL",
			location: "Las Piñas",
			message:
				"I used to think I wasn't 'qualified' to disciple anyone. ARQ gave me the tools and courage.",
		},
		{
			image: "/images/arq/arq-blue-logo.png",
			name: "PASTOR MARK",
			location: "Bacolod",
			message:
				"We've seen more fruit in our church through ARQ than any traditional class we've done.",
		},
	];

	return (
		<div className="gap-3 md:gap-7 w-full h-full px-8 pb-56 pt-16 md:pt-24 lg:px-16 flex flex-col justify-center items-center text-center transition-all duration-300 text-black bg-">
			<div className="font-montserrat flex flex-col items-center justify-center">
				<span className="text-blue font-bold text-xl sm:text-2xl md:text-3xl">
					Testimonies from the Journey
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium">
					Honest, heartfelt stories from families, facilitators, and pastors.
				</span>
			</div>

			<div className="w-full overflow-visible md:overflow-x-auto no-scrollbar px-0 py-5 md:px-5 md:py-5">
				<div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-max mx-auto">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white rounded-sm shadow-lg p-6 md:p-8 flex flex-col items-center text-center gap-2 md:gap-4 relative w-full sm:w-lg md:w-md flex-shrink-0 group hover:shadow-blue/25 transition-all duration-300 cursor-default"
						>
							<div className="absolute top-4 right-4 opacity-80 group-hover:opacity-100 transition-all duration-300">
								<Quotes size={50} weight="fill" color="#17213e" />
							</div>
							<div className="flex md:flex-row flex-col items-center justify-center md:justify-start gap-4 w-full">
								{/* <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover"
                                /> */}
								<div className="w-16 h-16 rounded-full bg-gray/50"></div>
								<div className="font-montserrat flex flex-col items-center md:items-start justify-center">
									<h3 className="font-bold text-blue text-base sm:text-lg mb-1 leading-none">
										{testimonial.name}
									</h3>
									<p className="text-sm sm:text-base font-semibold text-yellow-dark">
										{testimonial.location}
									</p>
								</div>
							</div>
							<p className="text-sm sm:text-base text-center md:text-justify">
								{testimonial.message}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
