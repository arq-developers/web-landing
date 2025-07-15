import React from "react";

import {
	Hero,
	Goals,
	WhatIsARQ,
	HowARQWorks,
	Stories,
	Testimonies,
} from "@/components/landing";
import About from "@/components/shared/aboutARQ";
import WhyItMatters from "@/components/shared/matters";

export default function Page() {
	return (
		<div>
			<Hero />
			<About />
			<Goals />
			<WhyItMatters />
			<WhatIsARQ />
			<HowARQWorks />
			<Stories />
			<Testimonies />
		</div>
	);
}
