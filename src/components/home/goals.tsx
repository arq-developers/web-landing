"use client";

import { House, Heart, User, BookOpen, Student } from "@phosphor-icons/react";

const GoalCard = ({
	goal,
	className = "",
}: {
	goal: any;
	className?: string;
}) => (
	<div
		className={`bg-white rounded-sm shadow-lg flex flex-col justify-center items-center p-4 sm:p-8 gap-2 flex-1 max-w-lg cursor-default hover:shadow-blue/45 transition-all duration-300 group hover:bg-blue-dark ${className}`}
	>
		<div className="flex flex-col justify-center items-center">
			<div>{goal.icon}</div>
			<div className="font-montserrat text-blue font-bold text-base sm:text-lg group-hover:text-white-soft">
				{goal.title}
			</div>
		</div>
		<div className="text-sm sm:text-base group-hover:text-white-soft">
			{goal.description}
		</div>
	</div>
);

const renderGoalRow = (
	goals: any[],
	startIndex: number,
	endIndex: number,
	className = "",
) => (
	<div className={`flex gap-4 justify-center ${className}`}>
		{goals.slice(startIndex, endIndex).map((goal, index) => (
			<GoalCard key={startIndex + index} goal={goal} />
		))}
	</div>
);

export default function Goals() {
	const goals = [
		{
			icon: <House size={30} weight="fill" color="#f7b100" />,
			title: "ARQ Equipping Centers",
			description:
				"Launch ARQ Equipping Centers in 12 major cities across the Philippines.",
		},
		{
			icon: <Heart size={30} weight="fill" color="#f7b100" />,
			title: "Transformed Lives",
			description:
				"Help over 1 million Filipinos rediscover Jesus and live transformed lives.",
		},
		{
			icon: <User size={30} weight="fill" color="#f7b100" />,
			title: "Trained Facilitators",
			description:
				"Train 10,000+ facilitators to disciple 3+ people every 3 months.",
		},
		{
			icon: <BookOpen size={30} weight="fill" color="#f7b100" />,
			title: "Discipleship and Media",
			description:
				"Produce 1,000+ discipleship and media resources to support growth.",
		},
		{
			icon: <Student size={30} weight="fill" color="#f7b100" />,
			title: "ARQ Leadership College",
			description:
				"Establish with ministry, business, governance, media, and worship tracks.",
		},
	];

	return (
		<div className="w-full h-full pb-28 pt-24 px-8 md:px-16 flex flex-col justify-center items-center text-center gap-8 transition-all duration-300 ">
			<div className="font-montserrat flex flex-col items-center justify-center gap-1">
				<span className="text-blue/85 font-bold text-xl sm:text-2xl md:text-3xl leading-tight">
					Long-Term Impact Goals
				</span>
				<span className="text-gray text-base sm:text-lg md:text-xl font-medium leading-tight">
					From Homes to Cities and Cities to Nations
				</span>
			</div>
			<div className="max-w-6xl text-sm sm:text-base">
				We believe discipleship doesn't end in church—it multiplies through
				everyday people in homes, cafes, and companies. ARQ's vision is to equip
				Spirit-led, financially independent believers who influence the world
				around them with the life of Christ.{" "}
				<span className="font-semibold">By 2035, we aim to:</span>
			</div>

			<div className="w-full flex items-center justify-center">
				<div className="hidden lg:flex flex-col gap-4">
					{renderGoalRow(goals, 0, 3)}
					{renderGoalRow(goals, 3, 5)}
				</div>

				<div className="hidden md:flex lg:hidden flex-col gap-4">
					{renderGoalRow(goals, 0, 2)}
					{renderGoalRow(goals, 2, 4)}
					{renderGoalRow(goals, 4, 5)}
				</div>

				<div className="flex md:hidden flex-col gap-4">
					{goals.map((goal, index) => (
						<GoalCard key={index} goal={goal} />
					))}
				</div>
			</div>
		</div>
	);
}
