import Link from "next/link";
import React from "react";

import { Hero, Goals, ARQ } from "@/components/landing";
import About from "@/components/shared/aboutARQ";
import WhyItMatters from "@/components/shared/matters";

export default function Page() {
	return (
		<div>
			<Hero />
			<Goals />
			<ARQ />
			<About />
			<WhyItMatters />
		</div>
	);
}
