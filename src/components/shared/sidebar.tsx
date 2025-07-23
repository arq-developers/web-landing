"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "@phosphor-icons/react";

interface SidebarProps {
	isOpen: boolean;
	onClose: () => void;
}

const links = [
	{ href: "#arq-story", label: "ARQ's Story" },
	{ href: "#goals", label: "Long-Term Impact Goals" },
	{ href: "#why-it-matters", label: "Why It Matters?" },
	{ href: "#what-is-arq", label: "What is ARQ?" },
	{ href: "#how-arq-works", label: "How ARQ Works?" },
	{ href: "#stories", label: "Stories" },
	{ href: "#support-arq", label: "Support Us" },
	{ href: "/", label: "Start Your Journey" },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-svh bg-white-soft transition-transform duration-300 transform md:hidden ${
				isOpen ? "translate-x-0" : "-translate-x-full"
			}`}
		>
			<button
				className="absolute top-8 right-8 text-blue hover:text-yellow-dark transition-all duration-300 cursor-pointer"
				onClick={onClose}
			>
				<X size={24} />
			</button>
			<div className="flex flex-col justify-center items-center py-16 px-8 gap-12">
				<Link
					href="/"
					onClick={onClose}
					className="flex flex-col gap-3 items-center"
				>
					<Image
						alt="logo"
						width={100}
						height={100}
						src={"/images/arq/arq-blue-logo.png"}
					/>
					<Image
						alt="logo"
						width={200}
						height={200}
						src={"/images/arq/arq-blue-logo-name.png"}
					/>
				</Link>
				<div className="flex flex-col gap-2 w-full">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={onClose}
							className="w-full text-sm sm:text-base text-center p-3 font-medium bg-gray/3 hover:bg-yellow-dark/25 text-blue-dark rounded-sm transition-all duration-300"
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
