import Link from "next/link";
import React from "react";

import { Hero, Goals, ARQ } from "@/components/landing";

export default function Page() {
	return (
		<div>
			<Hero />
			<Goals />
			<ARQ />
		</div>
	);
}
