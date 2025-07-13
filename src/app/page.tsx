import Link from "next/link";
import React from "react";

import { Hero } from "@/components/landing";
import About from "@/components/shared/aboutARQ";
import WhyItMatters from "@/components/shared/matters";

export default function Page() {
	return (
		<div>
			<Hero />
			<About />
			<WhyItMatters />
		</div>
	);
}
