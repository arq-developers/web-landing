import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";
import WhyItMatters from "@/components/shared/matters";

const openSans = Open_Sans({
	variable: "--font-open-sans",
	subsets: ["latin"],
});

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "ARQ - Start Your Journey",
	description: "ARQ - Start Your Journey",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${openSans.variable} ${montserrat.variable} antialiased`}
			>
				<Navbar />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
