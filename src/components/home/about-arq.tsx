"use client";

import Image from "next/image";
import Link from "next/link";
import { CaretLeft } from "@phosphor-icons/react";

export default function AboutARQ() {
	return (
		<div className="w-full h-full pt-16 pb-24 md:pt-24 md:pb-36 px-8 md:px-16 flex flex-col justify-center items-center text-center gap-8 md:gap-12 transition-all duration-300 ">
			<div className="font-montserrat flex flex-col items-center justify-center gap-1">
				<span className="text-blue-dark font-bold text-2xl md:text-4xl leading-tight">
					About ARQ
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
					Where Discipleship Meets Real Life
				</span>
			</div>
			<Image
				src="/images/hero/467357773_2396348514046355_3106270350575818250_n.jpg"
				alt="about-arq"
				quality={100}
				width={500}
				height={500}
				className="w-full max-w-6xl h-[350px] md:h-[500px] object-cover object-center rounded-sm"
			/>
			<div className="gap-4 sm:text-base text-sm flex flex-col items-start justify-center w-full max-w-6xl text-left">
				<span>
					ARQ began with a quiet but bold question:{" "}
					<span className="font-bold hover:text-blue transtion-all duration-300">
						“What if discipleship wasn’t confined to pulpits or programs?”
					</span>
				</span>
				<span>
					It started when a man who wanted to lead a Bible study, not with a mic
					or title, but around coffee with his wife.
				</span>
				<span>
					He envisioned something different: a safe, honest space where people
					could talk about God without pressure, judgment, or performance.
				</span>
				<span>
					No church stage. No religious formalities. Just life-on-life
					conversations that make faith feel real.
				</span>
				<span>
					But every time he mentioned “Bible study,” people pulled away. They
					imagined the usual setup: preachy, passive, and predictable. So he
					reframed it.
				</span>
				<span className="font-bold hover:text-blue transtion-all duration-300">
					“Let’s try this for 3 months—just one hour a week. A casual
					conversation about life, using a simple module as our guide.”
				</span>
				<span>
					It began with his wife, Josela, on October 15, 2024. That one
					intentional hour each week became a sacred rhythm, not just learning
					Scripture, but building their marriage on it. 
				</span>
				<span>Then came his siblings. Then their friends.</span>
				<span>
					Before long, others were asking to use the same simple tool.
				</span>
				<span>
					What began as one couple’s pursuit of relational discipleship grew
					into a movement.
				</span>
				<span>
					Today, ARQ is a growing platform co-built with tech entrepreneur and a
					man of God, Anthony Basang, and a team of passionate creatives.
				</span>
				<span>
					The goal?{" "}
					<span className="font-bold hover:text-blue transtion-all duration-300">
						To equip everyday believers to lead Spirit-led, interactive, and
						relational discipleship journeys in their homes, churches, and
						cities.
					</span>
				</span>
				<span>
					ARQ isn’t just another app or curriculum. It’s a lifestyle of bringing
					faith into everyday spaces—where discipleship feels doable, real, and
					personal.
				</span>
				<span>
					ARQ isn’t the church. But it exists to strengthen and multiply
					her—beyond the walls, into real life.
				</span>
				<span>It’s more than a tool.</span>
				<span className="font-bold hover:text-blue transtion-all duration-300">
					It’s a way of life that brings Jesus into our everyday life.
				</span>
			</div>
			<div className="flex items-center justify-start max-w-6xl w-full">
				<Link
					href="/"
					className="bg-yellow-dark py-2 pl-2 pr-4 rounded-sm text-white-soft font-medium text-sm md:text-base border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-blue-dark hover:text-blue-dark transition-all duration-300 disabled mt-2 cursor-pointer flex gap-1 items-center"
				>
					<CaretLeft size={20} /> Go Back
				</Link>
			</div>
		</div>
	);
}
