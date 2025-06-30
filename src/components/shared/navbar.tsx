import Link from "next/link";

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
		scrollTo: "stories",
	},
	{
		label: "Support Us",
		type: "link",
		scrollTo: "support-us",
	},
	{
		label: "Start Your Journey",
		type: "button",
		scrollTo: "start-your-journey",
	},
];

function Navbar() {
	return (
		<nav className="flex items-center justify-between px-10 py-4">
			<div className="flex items-center gap-4">
				<Link href="/">
					<img src="/images/logo.png" alt="ARQ Logo" className="h-10 w-auto" />
				</Link>
			</div>
			<div className="flex items-center gap-4">
				{navbarItems.map((item) => (
					<Link key={item.label} href={item.href || ""}>
						{item.label}
					</Link>
				))}
			</div>
		</nav>
	);
}

export default Navbar;
