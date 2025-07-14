import React from "react";

import { Hero, Goals, WhatIsARQ, HowARQWorks } from "@/components/landing";
import About from "@/components/shared/aboutARQ";
import WhyItMatters from "@/components/shared/matters";
import Foo from "@/components/shared/foo";

export default function Page() {
	return (
		<div>
			<Hero />
			<Goals />
			<WhatIsARQ />
			<HowARQWorks />
			<About />
			<WhyItMatters />
			<Foo />
		</div>
	);
}
