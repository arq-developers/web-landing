"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Banner() {
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

	return (
		<div className="flex flex-col items-center justify-center h-80 md:h-80 relative text-black">
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
				<div className="flex flex-col items-center justify-center h-full px-8 lg:px-16 xl:px-30 gap-6 xl:gap-10 transition-all duration-300">
					<p className="text-white-soft text-center md:text-5xl text-3xl font-montserrat font-bold mt-12">
						TRANSFORMING <span className="text-yellow-dark">DISCIPLESHIP</span>,
						<br />
						TRANSFORMING <span className="text-yellow-dark">LIVES</span>.
					</p>
				</div>
			</div>
		</div>
	);
}
