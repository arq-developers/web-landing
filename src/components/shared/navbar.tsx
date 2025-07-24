"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, CaretDown, X } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";

import { Sidebar } from "@/components/shared";

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
				label: "ARQ's Story",
				type: "link",
				href: "#arq-story",
			},
			{
				label: "Long-Term Impact Goals",
				type: "link",
				href: "#goals",
			},
			{
				label: "Why It Matters?",
				type: "link",
				href: "#why-it-matters",
			},
			{
				label: "What is ARQ?",
				type: "link",
				href: "#what-is-arq",
			},
			{
				label: "How ARQ Works?",
				type: "link",
				href: "#how-arq-works",
			},
		],
	},
	{
		label: "Stories",
		type: "link",
		href: "#stories",
	},
	{
		label: "Support Us",
		type: "link",
		href: "#support-arq",
	},
	{
		label: "Start Your Journey",
		type: "button",
		href: "/",
	},
];

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);
	const [isWhiteNav, setIsWhiteNav] = useState(false);
	const [activeSection, setActiveSection] = useState<string>("");
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);

		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpenDropdown(null);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		const whiteNavSectionIds = ["hero", "why-it-matters", "hero-2"];
		const elements = whiteNavSectionIds
			.map((id) => document.querySelector(`#${id}`))
			.filter(Boolean) as HTMLElement[];

		let observer: IntersectionObserver | null = null;
		if (elements.length > 0) {
			observer = new window.IntersectionObserver(
				(entries) => {
					const isIntersecting = entries.some(
						(entry) => entry.isIntersecting && entry.intersectionRatio > 0,
					);
					setIsWhiteNav(isIntersecting);
				},
				{
					root: null,
					rootMargin: "0px 0px -90% 0px",
					threshold: 0.01,
				},
			);
			elements.forEach((el) => observer!.observe(el));
		}

		const sectionIds = [
			"hero",
			"arq-story",
			"goals",
			"why-it-matters",
			"what-is-arq",
			"how-arq-works",
			"stories",
			"support-arq",
		];
		const sectionElements = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean) as HTMLElement[];

		let ticking = false;
		const scrollSpy = () => {
			if (!ticking) {
				window.requestAnimationFrame(() => {
					let current = "";
					for (let i = 0; i < sectionElements.length; i++) {
						const section = sectionElements[i];
						const rect = section.getBoundingClientRect();
						if (rect.top <= 120 && rect.bottom > 120) {
							current = section.id;
							break;
						}
					}
					setActiveSection(current);
					ticking = false;
				});
				ticking = true;
			}
		};
		window.addEventListener("scroll", scrollSpy);
		scrollSpy();

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
			if (observer) {
				elements.forEach((el) => observer!.unobserve(el));
			}
			window.removeEventListener("scroll", scrollSpy);
		};
	}, [pathname]);

	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
		hash: string,
	) => {
		if (hash.startsWith("#")) {
			e.preventDefault();
			const el = document.querySelector(hash);
			if (el) {
				el.scrollIntoView({ behavior: "smooth" });
			}
			setOpenDropdown(null);
		}
	};

	return (
		<nav
			className={`flex items-center justify-between px-8 py-5 w-full transition-all duration-300 ${
				scrolled ? "bg-blue-white-soft/10 backdrop-blur" : ""
			}`}
		>
			<Link href="/">
				<Image
					src={
						isWhiteNav
							? "/images/arq/arq-white-logo-and-name.png"
							: "/images/arq/arq-blue-logo-and-name.png"
					}
					alt="ARQ Logo"
					className="h-8 w-auto"
					width={100}
					height={36}
					priority
				/>
			</Link>

			<div className="hidden md:flex items-center gap-4 lg:gap-8">
				{navbarItems.map((item) => {
					if (item.type === "dropdown" && item.withDropdown) {
						const activeDropdown = item.dropdownItems?.some(
							(subItem) =>
								subItem.href &&
								activeSection &&
								subItem.href.replace("#", "") === activeSection,
						);
						return (
							<div key={item.label} className="relative" ref={dropdownRef}>
								<button
									type="button"
									className={`flex items-center gap-1 ${
										activeDropdown
											? "text-yellow-dark"
											: isWhiteNav
												? "text-white-soft"
												: "text-blue-dark"
									} hover:text-yellow-dark cursor-pointer focus:outline-none`}
									onClick={() =>
										setOpenDropdown(
											openDropdown === item.label ? null : item.label,
										)
									}
								>
									<span>{item.label}</span>
									<CaretDown size={16} />
								</button>

								{openDropdown === item.label && (
									<div className="absolute left-1/2 -translate-x-1/2 mt-4 flex flex-col bg-white shadow-md rounded-md p-2 z-50 w-44 gap-1">
										{item.dropdownItems?.map((subItem) => {
											const isActive =
												subItem.href &&
												activeSection &&
												subItem.href.replace("#", "") === activeSection;
											return (
												<Link
													href={subItem.href!}
													key={subItem.label}
													className={`px-3 py-2 font-medium rounded-sm transition-all duration-300 text-blue-dark ${
														isActive
															? "bg-yellow-dark/50"
															: "hover:bg-yellow-dark/25"
													}`}
													onClick={(e) => {
														if (subItem.href && subItem.href.startsWith("#")) {
															handleSmoothScroll(e, subItem.href);
														} else {
															setOpenDropdown(null);
														}
													}}
												>
													{subItem.label}
												</Link>
											);
										})}
									</div>
								)}
							</div>
						);
					}
					if (item.type === "button") {
						return (
							<Link
								href={item.href!}
								key={item.label}
								className={` border-2 border-transparent hover:bg-transparent text-blue-dark px-7 py-2 rounded-sm font-medium text-sm md:text-base cursor-pointer transition-all duration-300 ${
									isWhiteNav
										? "bg-white-soft hover:border-white-soft hover:text-white-soft"
										: "bg-yellow-dark text-white hover:text-blue-dark hover:border-blue-dark"
								}`}
								onClick={(e) => {
									if (item.href && item.href.startsWith("#")) {
										handleSmoothScroll(e, item.href);
									}
								}}
							>
								{item.label}
							</Link>
						);
					}

					const isActive =
						item.href &&
						activeSection &&
						item.href.replace("#", "") === activeSection;
					return (
						<Link
							href={item.href!}
							key={item.label}
							className={`font-medium transition-all duration-300 ${
								isActive
									? "text-yellow-dark"
									: isWhiteNav
										? "text-white-soft"
										: "text-blue-dark"
							} hover:text-yellow-dark`}
							onClick={(e) => {
								if (item.href && item.href.startsWith("#")) {
									handleSmoothScroll(e, item.href);
								}
							}}
						>
							{item.label}
						</Link>
					);
				})}
			</div>
			<div
				className={`md:hidden cursor-pointer hover:text-[#f7b100] transition-all duration-300 ${
					isWhiteNav ? "text-[#f5f5f5]" : "text-[#1a2e66]"
				}`}
				onClick={() => setIsSidebarOpen(true)}
			>
				<List size={32} />
			</div>

			<Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
		</nav>
	);
}
