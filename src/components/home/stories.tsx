export default function Stories() {
	return (
		<div className="w-full h-full pt-24 px-8 md:px-16 flex flex-col justify-center items-center text-center gap-8 md:gap-12 transition-all duration-300 ">
			<div className="font-montserrat flex flex-col items-center justify-center gap-1">
				<span className="text-blue-dark font-bold text-2xl md:text-4xl leading-tight">
					Stories from the Field
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
					Real lives. Real transformation. One conversation at a time.
				</span>
			</div>

			<div className="carousel w-full max-w-[1500px] shadow-lg">
				<div
					id="slide1"
					className="carousel-item relative w-full flex justify-center items-center"
				>
					<div className="relative w-full aspect-video">
						<iframe
							src="https://www.youtube.com/embed/9or882ezy0k"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="absolute top-0 left-0 w-full h-full rounded-sm shadow-lg"
						></iframe>
					</div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href="#slide2"
							className="w-12 h-12 bg-blue-dark rounded-full text-white-soft shadow-lg flex items-center justify-center opacity-50 hover:opacity-100 transitional-all duration-300"
						>
							❮
						</a>
						<a
							href="#slide2"
							className="w-12 h-12 bg-blue-dark rounded-full text-white-soft shadow-lg flex items-center justify-center opacity-50 hover:opacity-100 transitional-all duration-300"
						>
							❯
						</a>
					</div>
				</div>
				<div
					id="slide2"
					className="carousel-item relative w-full flex justify-center items-center"
				>
					<div className="relative w-full aspect-video">
						<iframe
							src="https://www.youtube.com/embed/HEjXgow_N6o"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowFullScreen
							className="absolute top-0 left-0 w-full h-full rounded-sm shadow-lg"
						></iframe>
					</div>
					<div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
						<a
							href="#slide1"
							className="w-12 h-12 bg-blue-dark rounded-full text-white-soft shadow-lg flex items-center justify-center opacity-50 hover:opacity-100 transitional-all duration-300"
						>
							❮
						</a>
						<a
							href="#slide1"
							className="w-12 h-12 bg-blue-dark rounded-full text-white-soft shadow-lg flex items-center justify-center opacity-50 hover:opacity-100 transitional-all duration-300"
						>
							❯
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
