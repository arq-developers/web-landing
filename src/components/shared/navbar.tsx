"use client";
import Link from "next/link";
import { List, CaretDown } from "@phosphor-icons/react";

interface NavbarItems {
	label: string;
	href?: string;
	type: "link" | "button" | "dropdown";
	withDropdown?: boolean;
	dropdownItems?: NavbarItems[];
	scrollTo?: string;
}

const navbarItems: NavbarItems[] = [
	{
		label: "About",
		type: "dropdown",
		withDropdown: true,
		dropdownItems: [
			{
				label: "Mission",
				type: "link",
				href: "/mission",
				scrollTo: "mission",
			},
			{
				label: "Vision",
				type: "link",
				href: "/vision",
				scrollTo: "vision",
			},
		],
	},
	{
		label: "Stories",
		type: "link",
		href: "/#stories",
		scrollTo: "stories",
	},
	{
		label: "Support Us",
		type: "link",
		href: "/#support-us",
		scrollTo: "support-us",
	},
	{
		label: "Start Your Journey",
		type: "button",
		href: "/#start-your-journey",
		scrollTo: "start-your-journey",
	},
];

function Navbar() {
	return (
		<nav className="flex items-center justify-between px-3 py-2">
			<div className="flex items-center gap-8">
				<Link href="/">
					<img
						src="/images/arq/arq-blue-logo-with-name.png"
						alt="ARQ Logo"
						className="h-12 w-auto"
					/>
				</Link>
			</div>

			<div className="hidden lg:flex items-center gap-4">
				{navbarItems.map((item) => {
					if (item.type === "dropdown" && item.withDropdown) {
						return (
							<div key={item.label} className="relative group">
								<div className="flex items-center gap-1 text-gray-700 hover:text-blue-700 cursor-pointer">
									<span>{item.label}</span>
									<CaretDown size={16} />
								</div>

								<div className="absolute left-0 mt-2 hidden group-hover:flex flex-col bg-white shadow-md rounded-md py-2 z-50">
									{item.dropdownItems?.map((subItem) => (
										<Link
											key={subItem.label}
											href={subItem.href!}
											className="px-4 py-2 text-gray-700 hover:bg-gray-100"
										>
											{subItem.label}
										</Link>
									))}
								</div>
							</div>
						);
					}
					if (item.type === "button") {
						return (
							<Link key={item.label} href={item.href!}>
								<button className="bg-[#1a2e66] hover:bg-blue-800 text-white px-7 py-2 rounded transition">
									{item.label}
								</button>
							</Link>
						);
					}
					return (
						<Link
							key={item.label}
							href={item.href!}
							className="text-gray-700 hover:text-blue-700"
						>
							{item.label}
						</Link>
					);
				})}
			</div>
			<div className="lg:hidden text-[#1a2e66]">
				<List size={32} />
			</div>
		</nav>
	);
}

export default Navbar;
