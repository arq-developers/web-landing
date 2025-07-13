import Link from "next/link";
import React from "react";

import { Hero, Goals, WhatIsARQ, HowARQWorks } from "@/components/landing";
import About from "@/components/shared/aboutARQ";
import WhyItMatters from "@/components/shared/matters";

export default function Page() {
	return (
		<div>
			<Hero />
			<Goals />
			<WhatIsARQ />
			<HowARQWorks />
			<ARQ />
			<About />
			<WhyItMatters />
		</div>
	);
}
