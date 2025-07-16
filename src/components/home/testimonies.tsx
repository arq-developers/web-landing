"use client";

import { Quotes } from "@phosphor-icons/react";

export default function Testimonies() {
	const testimonials = [
		{
			image:
				"/images/hero/467357773_2396348514046355_3106270350575818250_n.jpg",
			name: "JESSICA, MOM",
			location: "Bacolod",
			message:
				"Before ARQ, we didn't know how to talk about faith at home. Now, we can't stop.",
		},
		{
			image:
				"/images/hero/467530055_1934671763690962_5162145518103783592_n.jpg",
			name: "ARQ FACILITATOR, KARL",
			location: "Las Piñas",
			message:
				"I used to think I wasn't 'qualified' to disciple anyone. ARQ gave me the tools and courage.",
		},
		{
			image:
				"/images/hero/474663832_1269361440788485_8472831950214551439_n.jpg",
			name: "PASTOR MARK",
			location: "Bacolod",
			message:
				"We've seen more fruit in our church through ARQ than any traditional class we've done.",
		},
	];

	return (
		<div className="gap-6 md:gap-9 w-full h-full pt-24 pb-36 px-8 md:px-16 flex flex-col justify-center items-center text-center transition-all duration-300 text-black bg-">
			<div className="font-montserrat flex flex-col items-center justify-center gap-1">
				<span className="text-blue/75 font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
					Testimonies from the Journey
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
					Honest, heartfelt stories from families, facilitators, and pastors.
				</span>
			</div>

			<div className="w-full overflow-visible md:overflow-x-auto no-scrollbar px-0 py-5 md:px-5 md:py-5">
				<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 w-full md:w-max mx-auto">
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							className="bg-white hover:bg-blue-dark group rounded-sm shadow-lg p-6 md:p-8 flex flex-col items-center text-center gap-2 md:gap-4 relative w-full sm:w-lg md:w-md flex-shrink-0 group hover:shadow-blue/25 transition-all duration-300 cursor-default"
						>
							<div className="absolute -top-7 right-4 transition-all duration-300">
								<Quotes
									size={72}
									weight="fill"
									className="text-blue-dark group-hover:text-gray-100 transition-all duration-300"
								/>
							</div>
							<div className="flex md:flex-row flex-col items-center justify-center md:justify-start gap-4 w-full">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-16 h-16 rounded-full object-cover"
								/>

								<div className="font-montserrat flex flex-col items-center md:items-start justify-center">
									<h3 className="font-bold text-blue text-base sm:text-lg mb-1 leading-none group-hover:text-yellow-light transition-all duration-300">
										{testimonial.name}
									</h3>
									<p className="text-sm sm:text-base font-semibold text-yellow-dark group-hover:text-white transition-all duration-300">
										{testimonial.location}
									</p>
								</div>
							</div>
							<p className="text-sm sm:text-base text-center md:text-justify group-hover:text-white-soft transition-all duration-300">
								{testimonial.message}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
