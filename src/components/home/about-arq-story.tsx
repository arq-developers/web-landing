import Link from "next/link";
import Image from "next/image";

function AboutARQ() {
	return (
		<section className="pt-24 pb-12 px-8 md:px-16">
			<div className="max-w-6xl mx-auto space-y-12">
				<div className="font-montserrat flex flex-col items-center justify-center gap-1">
					<span className="text-blue-dark font-bold text-2xl md:text-4xl leading-tight">
						About ARQ
					</span>
					<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
						Where Discipleship Meets Real Life
					</span>
				</div>

				<div className="flex flex-col md:flex-row items-stretch gap-8">
					<div className="w-full md:w-1/2 relative h-80 md:h-auto bg-[url('/images/hero/467357773_2396348514046355_3106270350575818250_n.jpg')] bg-cover bg-center bg-no-repeat rounded-sm">
						<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue/50 to-blue w-full h-full rounded-sm"></div>
					</div>

					<div className="w-full md:w-1/2 gap-4 flex flex-col items-start justify-center text-left sm:text-base text-sm">
						<p>
							ARQ began with a quiet but bold question:{" "}
							<span className="font-semibold">
								“What if discipleship wasn’t confined to pulpits or programs?”
							</span>
						</p>

						<p>
							It started with a man who didn’t want to lead a Bible study from a
							stage—but around coffee with his wife. He imagined something more
							honest. A safe space where people could talk about God without
							performance, pressure, or pretense.
						</p>

						<p>
							No religious stage. No fancy titles. Just life-on-life
							conversations that made faith feel real.
						</p>

						<p>
							But when he called it “Bible study,” people pulled back. It felt
							too preachy, too predictable. So he tried something different.
						</p>

						<p className="font-semibold">
							“Let’s try this for 3 months—just one hour a week. A casual
							conversation about life, using a simple module as our guide.”
						</p>

						<Link
							href="/about"
							className="bg-yellow-dark py-2 px-7 rounded-sm text-white-soft font-medium text-sm md:text-base border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-blue-dark hover:text-blue-dark transition-all duration-300 disabled mt-2 cursor-not-allowed"
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
