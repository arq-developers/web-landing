import Link from "next/link";
import React from "react";

import FooBar from "@/components/foo-bar";

export default function Page() {
	return (
		<div className="bg-blue-500">
			<Link href="/about">ABout Kamay</Link>
			<button className="btn btn-primary">Pinalitan Button</button>
			<FooBar />
		</div>
	);
}
