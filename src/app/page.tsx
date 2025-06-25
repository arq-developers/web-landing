import Link from "next/link";
import React from "react";

export default function Home() {
	return (
		<div className="p-8 space-y-4">
			<Link href="/about">About</Link>
			<button className="btn btn-primary">Test Button</button>

			{/* Color showcase */}
			<div className="space-y-2">
				<p className="text-blue text-2xl font-bold">
					Blue Color (for titles or as dark bg)
				</p>
				<p className="text-black text-xl">Black Color (for body text)</p>
				<p className="text-gray text-lg">Gray Color (for subtitles)</p>
				<p className="text-yellow-dark text-lg font-semibold">
					Yellow Dark Color (for lighter bg)
				</p>
				<p className="text-yellow-light text-lg font-semibold">
					Yellow Light Color (for darker bg)
				</p>
				<p className="text-white bg-gray-800 p-2 rounded">
					White Color (pure white)
				</p>
				<p className="text-white-soft bg-gray-800 p-2 rounded">
					White Soft Color (soft white)
				</p>
			</div>
		</div>
	);
}
