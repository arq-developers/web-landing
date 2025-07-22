// import Link from "next/link";

import { Banner, AboutARQ } from "@/components/home";

function Page() {
	return (
		<div className="min-h-screen bg-[url('/images/bg/mobgradient-bg.png')] sm:bg-[url('/images/bg/gradient-bg.png')] bg-no-repeat bg-top sm:bg-center bg-fixed">
			<Banner />

			<AboutARQ />
			{/* <Link href="/">Home</Link> */}
		</div>
	);
}

export default Page;
