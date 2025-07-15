import Link from "next/link";
import Image from "next/image";

function AboutARQ() {
	return (
		<section className="bg-white font-montserrat text-[#1a2e66] py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto space-y-12">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a237e]">
						About ARQ
					</h2>
					<p className="mt-2 text-lg sm:text-xl text-gray-600 font-medium">
						Where Discipleship Meets Real Life
					</p>
				</div>

				<div className="flex flex-col lg:flex-row items-center gap-12">
					<div className="w-full lg:w-1/2">
						<img
							src="/images/hero/467357773_2396348514046355_3106270350575818250_n.jpg"
							alt="loading..."
							className="rounded-lg shadow-lg object-cover w-full h-[500px]"
						/>
					</div>

					<div className="w-full lg:w-1/2 space-y-6">
						<p className="text-base text-gray-800 leading-relaxed">
							ARQ began with a quiet but bold question:{" "}
							<span className="font-semibold italic">
								“What if discipleship wasn’t confined to pulpits or programs?”
							</span>
						</p>

						<p className="text-base text-gray-800 leading-relaxed">
							It started with a man who didn’t want to lead a Bible study from a
							stage—but around coffee with his wife. He imagined something more
							honest. A safe space where people could talk about God without
							performance, pressure, or pretense.
						</p>

						<p className="text-base text-gray-800 leading-relaxed">
							No religious stage. No fancy titles. Just life-on-life
							conversations that made faith feel real.
						</p>

						<p className="text-base text-gray-800 leading-relaxed">
							But when he called it “Bible study,” people pulled back. It felt
							too preachy, too predictable. So he tried something different.
						</p>

						<p className="text-lg font-semibold text-[#1E2A5A] leading-relaxed">
							“Let’s try this for 3 months—just one hour a week. A casual
							conversation about life, using a simple module as our guide.”
						</p>

						<Link
							href="/about"
							className="inline-block bg-yellow-400 text-black font-semibold py-3 px-6 rounded-md shadow hover:bg-yellow-300 transition duration-300"
						>
							Read more
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutARQ;
