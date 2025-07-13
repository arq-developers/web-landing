import Link from "next/link";
import React from "react";

import { Hero, Goals, WhatIsARQ, HowARQWorks } from "@/components/landing";

export default function Page() {
	return (
		<div>
			<Hero />
			<Goals />
			<WhatIsARQ />
			<HowARQWorks />
		</div>
	);
}
