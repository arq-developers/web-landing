export default function SupportARQ() {
	const waysToGive = [
		"One-time Donation",
		"Monthly Partner",
		"Sponsor a Center",
		"Corporate or Business Partnerships",
	];

	const givingFunds = [
		"Training facilitators in cities across the Philippines",
		"Building and launching ARQ Equipping Centers",
		"Producing high-quality, Spirit-filled digital tools and media content",
		"Livelihood training, leadership formation, and outreach missions",
	];

	return (
		<div className="w-full h-full py-24 px-8 lg:px-16 flex flex-col justify-center items-center text-center gap-8 md:gap-12 transition-all duration-300 bg-gray/10">
			<div className="font-montserrat flex flex-col items-center justify-center gap-1">
				<span className="text-blue-dark font-bold text-2xl md:text-4xl leading-tight">
					Support Our Mission
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
					Equipping Believers to Disciple—Beginning at Home
				</span>
			</div>
			<div className="bg-white shadow-lg w-full xl:w-auto flex flex-col md:flex-row items-start justify-center p-8 sm:p-10 md:p-16 gap-8 md:gap-16 xl:gap-24 text-left">
				<div className="flex flex-col items-start justify-center gap-3 md:gap-4">
					<span className="text-blue font-bold text-lg md:text-xl pl-5">
						Ways to Give
					</span>
					<div className="flex flex-col items-start justify-center border-l-4 border-l-yellow-dark rounded-sm pl-4 gap-3">
						{waysToGive.map((way, index) => (
							<span
								key={index}
								className="leading-tight cursor-default hover:font-medium transition-all duration-300 text-sm sm:text-base"
							>
								{way}
							</span>
						))}
					</div>
				</div>
				<div className="flex flex-col items-start justify-center gap-3 sm:gap-4">
					<span className="text-blue font-bold text-lg sm:text-xl pl-5">
						Your Giving Directly Funds
					</span>
					<div className="flex flex-col items-start justify-center border-l-4 border-l-yellow-dark rounded-sm pl-4 gap-3">
						{givingFunds.map((fund, index) => (
							<span
								key={index}
								className="leading-tight cursor-default hover:font-medium transition-all duration-300 text-sm sm:text-base"
							>
								{fund}
							</span>
						))}
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center justify-center gap-1 mt-4">
				<span className="text-blue font-bold text-base sm:text-lg md:text-xl leading-tight font-montserrat">
					GIVE NOT JUST TO A PROGRAM—GIVE TO A MOVEMENT.
				</span>
				<span className="sm:text-base text-sm leading-tight">
					You’re not funding a building. You’re building people.
				</span>
				<button className="bg-yellow-dark py-2 px-7 rounded-sm text-white-soft font-medium text-sm md:text-base border-2 border-transparent hover:bg-transparent hover:border-2 hover:border-blue-dark hover:text-blue-dark transition-all duration-300 disabled mt-4 cursor-not-allowed">
					Give Support
				</button>
			</div>
		</div>
	);
}
