import Link from "next/link";
import React from "react";

export default function Home() {
	return (
		<div>
						<Link href="/about">About</Link>
			<button className="btn btn-primary">Test Button</button>
		</div>
	);
}
