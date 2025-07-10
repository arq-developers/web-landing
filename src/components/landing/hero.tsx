"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
	const heroImages = [
		"/images/hero/467357773_2396348514046355_3106270350575818250_n.jpg",
		"/images/hero/474663832_1269361440788485_8472831950214551439_n.jpg",
		"/images/hero/467530055_1934671763690962_5162145518103783592_n.jpg",
	];
	const [current, setCurrent] = useState(0);
	const [prev, setPrev] = useState<number | null>(null);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setPrev(current);
			setFade(false);
			setTimeout(() => {
				setCurrent((prevIdx) => (prevIdx + 1) % heroImages.length);
				setFade(true);
			}, 600);
		}, 5000);
		return () => clearInterval(interval);
	}, [current, heroImages.length]);

	const scrollToAbout = () => {
		const aboutSection = document.getElementById("about");
		if (aboutSection) {
			aboutSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen relative">
			<div className="w-full h-full absolute top-0 left-0 z-0">
				<Image
					key={current}
					src={heroImages[current]}
					alt="Hero Image"
					fill
					className="object-cover object-top transition-opacity duration-700 opacity-100"
					priority
				/>

				{prev !== null && prev !== current && (
					<Image
						key={prev}
						src={heroImages[prev]}
						alt="Hero Image"
						fill
						className={`object-cover object-top transition-opacity duration-700 absolute top-0 left-0 w-full h-full ${
							fade ? "opacity-0" : "opacity-100"
						}`}
						priority
					/>
				)}
			</div>

			<div className="w-full h-full bg-blue-dark/90 absolute top-0 left-0 z-1 pointer-events-none"></div>
			<div className="w-full h-full absolute z-2">
				<div className=" flex flex-col items-center justify-center h-full px-8 lg:px-16 xl:px-30 gap-6 xl:gap-10 transition-all duration-300">
					<p className="text-white-soft text-center xl:text-7xl md:text-5xl text-4xl font-montserrat font-bold">
						TRANSFORMING <span className="text-yellow-dark">DISCIPLESHIP</span>,
						<br />
						TRANSFORMING <span className="text-yellow-dark">LIVES</span>.
					</p>
					<p className="text-white-soft text-center text-base md:text-xl w-11/12 md:w-3/4 xl:w-3/5">
						ARQ is all about bringing discipleship into everyday life, where
						faith is lived out in real-world conversations. It’s not just
						another program; it’s a meaningful journey where believers lead
						genuine, Spirit-led discussions that transform lives and build
						stronger communities.
					</p>
					<button
						onClick={scrollToAbout}
						className="bg-yellow-dark py-2 px-7 rounded-sm text-blue-dark font-medium text-base md:text-lg cursor-pointer border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-white-soft hover:text-white-soft transition-all duration-300"
					>
						Learn More
					</button>
				</div>
			</div>
		</div>
	);
}
