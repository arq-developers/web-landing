import Link from "next/link";
import React from "react";

import { Hero, Goals, WhatIsARQ, HowARQWorks } from "@/components/landing";
import WhyItMatters from "@/components/shared/matters";

export default function Page() {
	return (
		<div>
			<Hero />
			<Goals />
			<WhyItMatters />
			<WhatIsARQ />
			<HowARQWorks />
		</div>
	);
}
