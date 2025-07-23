import React from "react";

import {
	Hero,
	AboutARQStory,
	Goals,
	WhyItMatters,
	WhatIsARQ,
	HowARQWorks,
	Stories,
	Testimonies,
	SupportARQ,
} from "@/components/home";

export default function Page() {
	return (
		<div className="min-h-screen bg-[url('/images/bg/mobgradient-bg.png')] sm:bg-[url('/images/bg/gradient-bg.png')] bg-no-repeat bg-bottom sm:bg-center bg-fixed">
			<div id="hero">
				<Hero />
			</div>

			<div id="arq-story">
				<AboutARQStory />
			</div>
			<div id="goals">
				<Goals />
			</div>
			<div id="why-it-matters">
				<WhyItMatters />
			</div>
			<div id="what-is-arq">
				<WhatIsARQ />
			</div>
			<div id="how-arq-works">
				<HowARQWorks />
			</div>
			<div id="stories">
				<Stories />
				<Testimonies />
			</div>

			<div id="support-arq">
				<SupportARQ />
			</div>
		</div>
	);
}
