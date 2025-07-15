import React from "react";

import {
	Hero,
	Goals,
	WhatIsARQ,
	HowARQWorks,
	Stories,
	Testimonies,
	SupportARQ,
} from "@/components/landing";
import About from "@/components/shared/aboutARQ";
import WhyItMatters from "@/components/shared/matters";

export default function Page() {
	return (
		<div>
			<Hero />
			<div id="about">
				<About />
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
