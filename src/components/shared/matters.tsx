import Link from "next/link";

function WhyItMatters() {
	return (
		<section className="bg-[#1a2e66] font-montserrat text-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto space-y-10">
				<div className="text-center space-y-4 mb-12">
					<h2 className="text-3xl sm:text-4xl font-extrabold text-yellow-400">
						Why It Matters
					</h2>
					<p className="text-xl text-gray-200 leading-relaxed">
						Many Christians love Jesus but feel stuck in their faith journey—
						especially at work and at home.
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-12 mt-8">
					<div className="flex-1 flex flex-col space-y-8">
						<p className="border-l-4 border-yellow-400 pl-3 text-lg text-gray-100 leading-relaxed">
							<span className="font-semibold">
								65% of Christians say they feel unequipped to share their faith,
								especially in secular spaces.
							</span>{" "}
							<em className="italic">(Barna Group)</em>
						</p>

						<p className="border-l-4 border-yellow-400 pl-3 text-lg text-gray-100 leading-relaxed">
							<span className="font-semibold">
								Over 1 million Filipinos leave the institutional church
								annually, not because they stop believing—but because they feel
								unseen, unengaged, and under-equipped.
							</span>{" "}
							<em className="italic">(Pew Forum / National Church Data)</em>
						</p>

						<p className="border-l-4 border-yellow-400 pl-3 text-lg text-gray-100 leading-relaxed">
							<span className="font-semibold">
								Most discipleship models are classroom-style and
								one-directional— leaving no room for honest conversations,
								personal questions, or relational growth.
							</span>
						</p>
					</div>

					<div className="flex-1 flex items-center justify-center">
						<div className="bg-white text-[#1E2A5A] p-4 sm:p-8 rounded-xl shadow-lg space-y-2 flex flex-col items-center text-center max-w-md w-full">
							<div className="mb-1">
								<img
									src="/images/ARQ.png"
									alt="ARQ Logo"
									className="h-30 w-40"
								/>
							</div>
							<h3 className="text-1xl sm:text-1xl font-bold">
								ARQ EXISTS TO BRIDGE THAT GAP.
							</h3>
							<p className="text-lg leading-relaxed">
								We believe discipleship is not an event—it’s a lifestyle that
								multiplies when believers are empowered, heard, and equipped.
							</p>
							<Link
								href="/WhyItMatters"
								className="inline-block mt-2 text-yellow-500 font-semibold hover:underline transition duration-300 ease-in-out"
							>
								Learn more
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default WhyItMatters;
