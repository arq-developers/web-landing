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
			<Hero />
			<div id="about">
				<AboutARQStory />
			</div>
			<Goals />
			<WhyItMatters />
			<WhatIsARQ />
			<HowARQWorks />
			<Stories />
			<Testimonies />
			<SupportARQ />
		</div>
	);
}
