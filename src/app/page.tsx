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
		<div>
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
